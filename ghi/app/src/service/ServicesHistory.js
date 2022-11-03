import { getInstances, updateInstance } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function DataTable(props) {

    let servicesFiltered = props.servicesFiltered;

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {servicesFiltered.map((service) => {
                        return (
                            <tr key={service.id}>
                                <td>{service.automobile.vin}</td>
                                <td>{service.customer.name}</td>
                                <td>{new Date(service.appointment_date).toLocaleDateString()}</td>
                                <td>{service.technician.name}</td>
                                <td>{service.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }


export default function ServicesHistory() {

    const [loadData, setLoadData] = useState(
        {
            servicesFiltered: [],
            services: [],
            automobiles: [],
        }
    );

    const [userInput, setUserInput] = useState(
        {
            automobile: "",
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                let data = {};
                data.services = await getInstances(8080, 'services');
                data.services = data.services.filter(service => service.status == "FINISHED");
                data.servicesFiltered = data.services;
                data.automobiles = await getInstances(8100, 'automobiles');

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
            ...userInput, [name]:value
        });
    }


    const handleClick = async (event) => {
        event.preventDefault();

        let data = [...loadData.services]

        if (userInput.automobile && userInput.automobile != "all") {
            data = data.filter(i => i.automobile.vin == userInput.automobile);
        }

        setLoadData({
            ...loadData, servicesFiltered:data
        });

    }


    if (loadData.services.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create{' '}
                                <Link to={`/services/new`}>services</Link>?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )
    } else {
        return (
            <>
                <div>
                    <h1 className="mt-3">Services</h1>
                </div>
                <div className="input-group mb-3">
                        <select onChange={handleChange} value={userInput.automobile} required id="automobile" name="automobile" className="form-select">
                        <option value="">Choose an automobile</option>
                        <option value="all">All</option>
                        {loadData.automobiles.map(automobile => {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>
                                    {automobile.model.manufacturer.name} {automobile.model.name} ({automobile.vin})
                                </option>
                            )
                        })}
                    </select>
                    <span className="input-group-btn ml-3">
                        <button onClick={handleClick} type="button" className="btn btn-primary">Filter</button>
                    </span>
                </div>
                <div className="row">
                    <DataTable servicesFiltered={loadData.servicesFiltered} automobiles={loadData.automobiles} automobile={userInput.automobile} />
                </div>
            </>
        )
    }
}
