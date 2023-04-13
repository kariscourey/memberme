import { useEffect, useState } from "react";
import { getMembers } from './common/api';
import CustomCard from './common/CustomCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MembersColumn(props) {

    return (
        <div className="col">
            {props.list.map(member => {

                return (
                    <div key={member.cell}>
                        <CustomCard thumbnail={member.picture.thumbnail} first={member.name.first} last={member.name.last} age={member.dob.age} />
                    </div>
                );
            })}
        </div>
    );
}

function MainPage() {

    const [membersColumns, setColumns] = useState([[], [], []]);

    const [title, setTitle] = useState(<></>);

    useEffect(() => {
        const fetchMembers = async () => {
            const membersData = await getMembers();

            let i = 0;
            let membersCols = [[], [], []]

            console.log(membersData.results);

            for (let memberData of membersData.results) {
                membersCols[i].push(memberData);
                i++;
                if (i > 2) {
                    i = 0;
                }
            }
            setColumns(membersCols);

            if (membersCols[0].length !== 0) {
                setTitle(<h2 className="mb-3">Members</h2>);
            }
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
            <Container>
                {title}
                <Row>
                    {membersColumns.map((membersList, index) => {
                        return (
                            <MembersColumn list={membersList} key={index} />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default MainPage;
