import React from 'react';
import { handleChange } from '../common/synthetic';

class ServiceAppointmentsHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceAppointmentsFiltered: [],
            serviceAppointments: [],
            automobiles: [],
            automobile: "",

        };
        this.handleChange = handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    async componentDidMount() {
      let url = 'http://localhost:8080/api/services/';
      let response = await fetch(url);
      console.log(response)
      if (response.ok) {
          const data = await response.json();
          data.service_appointments = data.service_appointments.filter(service_appointment => service_appointment.status == "FINISHED");
          this.setState({serviceAppointments: data.service_appointments});
          this.setState({serviceAppointmentsFiltered: data.service_appointments});
          }
      url = 'http://localhost:8100/api/automobiles/';
      response = await fetch(url);

      if (response.ok) {
          const data = await response.json();
          // console.log(data);
          // console.log(data.automobiles);
          this.setState({automobiles: data.automobiles});
          }
      }

      async handleClick(event) {
        event.preventDefault();
        const automobileVin = this.state.automobile;
        let serviceAppointments = this.state.serviceAppointments;
        console.log(automobileVin);
        console.log(serviceAppointments);
        let serviceAppointmentsFiltered = serviceAppointments.filter(serviceAppointment => serviceAppointment.automobile.vin == automobileVin);
        this.setState({serviceAppointmentsFiltered: serviceAppointmentsFiltered});

    }


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
                  <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.automobile} required id="automobile" name="automobile" className="form-select">
                        <option value="">Choose a automobile</option>
                        {this.state.automobiles.map(automobile => {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>
                                {automobile.model.manufacturer.name} {automobile.model.name} ({automobile.vin})

                                </option>
                            )
                        })}
                      </select>
                    </div>
                    <div>
                    <button onClick={this.handleClick} type="button" className="btn btn-primary">Search</button>
                    </div>
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
                        {this.state.serviceAppointmentsFiltered.map((serviceAppointment) => {
                            return (
                                <tr key={serviceAppointment.id}>
                                    <td>{serviceAppointment.automobile.vin}</td>
                                    <td>{serviceAppointment.owner_name}</td>
                                    <td>{serviceAppointment.appointment_date}</td>
                                    <td>{serviceAppointment.technician.tech_name}</td>
                                    <td>{serviceAppointment.reason}</td>
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

export default ServiceAppointmentsHistory;
