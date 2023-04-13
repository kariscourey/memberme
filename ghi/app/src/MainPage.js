import { useEffect, useState } from "react";
import { getMembers } from './common/api';
import { CustomCard } from './common/CustomCard';
import { CardList } from './common/CardList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// function MembersColumn(props) {

//     let filteredMembers = props.filteredMembers;

//     return (
//         <Col>
//             {filteredMembers.map(member => {

//                 return (
//                     <div key={member.cell}>
//                         <CustomCard thumbnail={member.picture.thumbnail} first={member.name.first} last={member.name.last} age={member.dob.age} />
//                     </div>
//                 );
//             })}
//         </Col>
//     );
// }

function MainPage() {

    const [title, setTitle] = useState(<></>);

    const [filterInput, setFilterInput] = useState("");

    const [loadData, setLoadData] = useState(
        {
            members: {},
            filteredMembers: {},
        }
    );

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (filterInput && filterInput != "") {

            let data = [...loadData.members];

            data = data.filter(
                i => i.name.first.toLowerCase().includes(filterInput.toLowerCase()) ||
                    i.name.last.toLowerCase().includes(filterInput.toLowerCase())
            );

            setLoadData({
                ...loadData, filteredMembers: data
            });
        }
    }

    useEffect(() => {
        const fetchMembers = async () => {

            let data = {};
            data.members = (await getMembers()).results;
            data.filteredMembers = data.members;

            setLoadData(data);

        }
        fetchMembers();
    }, []);

    return (
        <>
            <Container className="px-4 py-5 my-5 text-center">
                <Container className="display-5 fw-bold">MemberMe</Container>
                <Col className="col-lg-6 mx-auto">
                    <Container className="lead mb-4">
                        For all your membership needs.
                    </Container>
                </Col>
            </Container>
            {
                (Object.keys(loadData.filteredMembers).length != 0) ?
                    <>
                        <Container>
                            {/* optimization: turn into a component, utilize React Redux for cross-component state compatability  */}
                            <Form className="flex-form" onSubmit={handleSubmit}>
                                <Form.Group onChange={e => setFilterInput(e.target.value)} className="mb-3" controlId="filterInput" value={filterInput}>
                                    <Form.Control type="string" placeholder="Enter first or last name" />
                                </Form.Group>
                                <Button className="custom-button" variant="primary" type="submit">
                                    Filter
                                </Button>
                            </Form>
                        </Container>
                        <Container>
                            {title}
                            <CardList cards={loadData?.filteredMembers} />
                        </Container>
                    </> :
                    <></>
            }
        </>
    );
}

export default MainPage;
