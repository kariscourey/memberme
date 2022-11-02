import { createInstance } from '../common/api';
import { useState } from "react";


export default function TechnicianForm() {
    const [userInput, setUserInput] = useState(
        {
            name: '',
            employeeNumber: '',
        }
    );

    const [alert, setAlert] = useState(<></>);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserInput({
            ...userInput, [name]:value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...userInput};
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber;

        const response = await createInstance(8080, 'technicians', data);

        if (response.ok) {

            const cleared = {
                name: '',
                employeeNumber: '',
            };
            setUserInput(cleared);
            setAlert(false);

        } else {
            setAlert(<><div className="alert alert-primary mt-3" role="alert"><div>Invalid input!</div></div></>);
        }

    }

    return (
        <div className="container">
            {alert}
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a technician</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} placeholder="Name" value={userInput.name} required type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} placeholder="Employee number" value={userInput.employeeNumber} required type="number" id="employeeNumber" name="employeeNumber" className="form-control"/>
                            <label htmlFor="employeeNumber">Employee number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
