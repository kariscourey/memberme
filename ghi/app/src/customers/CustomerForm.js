import { createInstance } from '../common/api';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { refreshPage } from '../common/window';


export default function CustomerForm() {

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState(
        {
            name: '',
            address: '',
            phoneNumber: '',
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
        data.phone_number = data.phoneNumber;
        delete data.phoneNumber;

        const response = await createInstance(8120, 'customers', data);

        if (response.ok) {

            let cleared = {
                name: '',
                address: '',
                phoneNumber: '',
            };
            setUserInput(cleared);

            navigate('/customers');

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
                        <h1>Create a customer</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} placeholder="Name" value={userInput.name} required type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} placeholder="Address" value={userInput.address} required type="text" id="address" name="address" className="form-control"/>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} placeholder="Phone number" value={userInput.phoneNumber} required type="number" id="phoneNumber" name="phoneNumber" className="form-control"/>
                            <label htmlFor="phoneNumber">Phone number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}
