import React from 'react';
// import { handleChange } from '../common/synthetic';

class ServiceAppointmentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceAppointments: [],
        };

    }
<<<<<<< HEAD
    async componentDidMount() {
      let url = 'http://localhost:8080/api/services/';
      let response = await fetch(url);
      console.log(response)
      if (response.ok) {
          const data = await response.json();
          data.service_appointments = data.service_appointments.filter(service_appointment => service_appointment.status == "scheduled");
          this.setState({serviceAppointments: data.service_appointments});
          }

      }

      async handleClick(event) {
        event.preventDefault();
        const statusInput = event.target.value;
        const serviceId = event.target.name;
        const data = {status:statusInput};
        const body = JSON.stringify(data);

        const url = `http://localhost:8080/api/services/${serviceId}/`;
        const fetchConfig = {
            method: 'put',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            const updatedService = await response.json();
            console.log(updatedService);
            window.location.reload(false);

        }
    }
=======

>>>>>>> main


    render() {
        return (
          <div className="container">
            <div className="row">
              <div id="alert">
                <div></div>
              </div>
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Service Appointments </h1>
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
                        {this.state.serviceAppointments.map((serviceAppointment) => {
                            return (
                                <tr key={serviceAppointment.automobile.vin}>
                                    <td>{serviceAppointment.automobile.vin}</td>
                                    <td>{serviceAppointment.owner_name}</td>
                                    <td>{serviceAppointment.appointment_date}</td>
                                    <td>{serviceAppointment.technician.tech_name}</td>
                                    <td>{serviceAppointment.reason}</td>
                                    <td>
                                        <button onClick={this.handleClick} name={serviceAppointment.id} value="CANCELED" type="button" className="btn btn-danger">Cancel</button>
                                        <button onClick={this.handleClick} name={serviceAppointment.id} value="FINISHED" type="button" className="btn btn-success">Finished</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}
}

export default ServiceAppointmentsList;
