import { useEffect, useState } from "react";
import { getMembers } from './common/api';
import CustomCard from './common/CustomCard';

function MembersColumn(props) {

    return (
        <div className="col">
            {props.list.map(member => {

                return (
                    // <div key={member.cell} className="card mb-4 shadow">
                    //     <img src={member.picture.thumbnail} className="card-img-top" />
                    //     <div className="card-body">
                    //         <h5 className="card-title">{member.name.first} {member.name.last}</h5>
                    //         <h6 className="card-subtitle mb-2 text-muted">
                    //             {member.dob.age}
                    //         </h6>
                    //         {/* <p className="card-text">
                    //             Made in {member.year}, this {member.color.toLowerCase()} {' '}
                    //             {member.model.manufacturer.name} {member.model.name} {' '}
                    //             is one of our best in stock!
                    //         </p> */}
                    //     </div>
                    // </div>

                    <div key={member.cell}>
                        <CustomCard thumbnail={member.picture.thumbnail} first={member.name.first} last={member.name.last} age={member.dob.age}/>
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
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">MemberMe</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        For all your membership needs.
                    </p>
                </div>
            </div>
            <div className="container">
                {title}
                <div className="row">
                    {membersColumns.map((membersList, index) => {
                        return (
                            <MembersColumn list={membersList} key={index} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default MainPage;
