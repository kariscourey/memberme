import { useEffect, useState } from "react";
import { getMembers } from './common/api';
import { CustomCard } from './common/CustomCard';
import { CustomFilter } from './common/CustomFilter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MembersColumn(props) {

    let membersFiltered = props.membersFiltered;

    return (
        <Col>
            {membersFiltered.map(member => {

                return (
                    <div key={member.cell}>
                        <CustomCard thumbnail={member.picture.thumbnail} first={member.name.first} last={member.name.last} age={member.dob.age} />
                    </div>
                );
            })}
        </Col>
    );
}

function MainPage() {

    const [membersColumns, setColumns] = useState([[], [], []]);

    const [title, setTitle] = useState(<></>);

    const [userInput, setUserInput] = useState(
        {
            filterInput: "",
        }
    );

    const [loadData, setLoadData] = useState(
        {
            membersColumns: [[], [], []],
            filteredMembersColumns: [[], [], []],
        }
    );

    useEffect(() => {
        const fetchMembers = async () => {
            const membersData = await getMembers();

            let i = 0;
            let membersCols = [[], [], []];
            let data = {};

            console.log(membersData.results);

            for (let memberData of membersData.results) {
                membersCols[i].push(memberData);
                i++;
                if (i > 2) {
                    i = 0;
                }
            }

            data.membersColumns = membersCols;
            data.filteredMembersColumns = membersCols;

            setLoadData(data);

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
                <CustomFilter />
            </Container>
            <Container>
                {title}
                <Row>
                    {loadData.membersColumns.map((membersList, index) => {
                        return (
                            <MembersColumn membersFiltered={membersList} key={index} />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default MainPage;
