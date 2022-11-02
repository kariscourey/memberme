import { getInstances, updateInstance } from '../common/api';
import { refreshPage } from '../common/window';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function DataTable(props) {

    let services = props.services;
    let handleClick = props.handleClick;

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
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => {
                        return (
                            <tr key={service.id}>
                                <td>{service.automobile.vin}</td>
                                <td>{service.customer}</td>
                                <td>{new Date(service.appointment_date).toLocaleDateString()}</td>
                                <td>{service.technician.name}</td>
                                <td>{service.reason}</td>
                                <td>
                                    <span className="input-group-btn ml-3">
                                        <button onClick={handleClick} name={service.id} value="CANCELED" type="button" className="btn btn-danger">Cancel</button>
                                        <button onClick={handleClick} name={service.id} value="FINISHED" type="button" className="btn btn-success">Finish</button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }


export default function ServicesList() {

    const [loadData, setLoadData] = useState(
        {
            services: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                let data = {};
                data.services = await getInstances(8080, 'services');
                data.services = data.services.filter(service => service.status == "scheduled");

                setLoadData(data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    const handleClick = async (event) => {
        event.preventDefault();
        const statusInput = event.target.value;
        const serviceId = event.target.name;
        const data = {status:statusInput};

        const response = await updateInstance(8080,'services',serviceId, data);

        if (response.ok) {
            refreshPage();
        }
  }

    if (loadData.services.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create a{' '}
                                <Link to={`/services/new`}>service</Link>?
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
                <div className="row">
                    <DataTable services={loadData.services} handleClick={handleClick} />
                </div>
            </>
        )
    }
}
