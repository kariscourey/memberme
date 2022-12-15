import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createInstance, getInstances } from '../common/api';
import { camelToUserFriendly, toSnake } from '../common/format';


export default function EmployeeForm() {

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState(
        {
            name: '',
            employeeNumber: '',
            position: '',
        }
    );

    const [loadData, setLoadData] = useState(
        {
            positions: [],
        }
    );

    const [noData, setNoData] = useState([]);
    const [alert, setAlert] = useState(<></>);

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                let data = {};
                data.positions = await getInstances(8110, 'positions');

                setNoData(Object.keys(data).filter(i => data[i].length == 0));
                setLoadData(data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserInput({
            ...userInput, [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { ...userInput };
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber;

        const response = await createInstance(8110, 'employees', data);

        if (response.ok) {

            let cleared = {
                name: '',
                employeeNumber: '',
                position: '',
            };
            setUserInput(cleared);
            setNoData(false);

            navigate('/employees');

        } else {
            setAlert(<><div className="alert alert-primary mt-3" role="alert"><div>Invalid input!</div></div></>);
        }
    }

    if (noData.length > 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                You're missing{' '}
                                {noData.map(i => {
                                    return (
                                        <Link key={toSnake(i)} to={`/${toSnake(i)}/new`}>{camelToUserFriendly(i)}</Link>
                                    )
                                }
                                )}
                                {' '}data!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                {alert}
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create an employee</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} placeholder="Name" value={userInput.name} required type="text" id="name" name="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} placeholder="Employee number" value={userInput.employeeNumber} required type="number" id="employeeNumber" name="employeeNumber" className="form-control" />
                                    <label htmlFor="employeeNumber">Employee number</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={handleChange} value={userInput.position} required id="position" name="position" className="form-select">
                                        <option value="">Choose a position</option>
                                        {loadData.positions.map(position => {
                                            return (
                                                <option key={position.id} value={position.id}>
                                                    {position.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
