import React from 'react';
import { handleChange } from '../common/synthetic';

class ServiceAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobiles: [],
            technicians: [],
            ownerName: '',
            appointmentDate: '',
            reason:'',
        };

        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
      let url = 'http://localhost:8100/api/automobiles/';
      let response = await fetch(url);

      if (response.ok) {
          const data = await response.json();
          // console.log(data);
          // console.log(data.automobiles);
          this.setState({automobiles: data.automobiles});
          }

      url = 'http://localhost:8080/api/technicians';
      response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // console.log(data.technicians);
            this.setState({technicians: data.technicians});
            }
      }

    async handleSubmit(event) {
      event.preventDefault();
      const data = {...this.state};
      data.owner_name = data.ownerName;
      delete data.ownerName;
      data.appointment_date = data.appointmentDate;
      delete data.appointmentDate;
      delete data.automobiles;
      delete data.technicians;
      console.log(data);

      const body = JSON.stringify(data);

      const url = 'http://localhost:8080/api/services/';
      const fetchConfig = {
          method: 'post',
          body: body,
          headers: {
              'Content-Type': 'application/json',
          },
      };

      const response = await fetch(url, fetchConfig);

      if (response.ok) {
          const newTechnician = await response.json();
          console.log(newTechnician);

          const cleared = {
            automobile: '',
            technician: '',
            ownerName: '',
            appointmentDate: '',
            reason:'',
          };
          this.setState(cleared);
      }
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
                  <h1>Create a Service Appointment</h1>
                  <form onSubmit={this.handleSubmit}>
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
                    <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.technician} required id="technician" name="technician" className="form-select">
                        <option value="">Choose a Technician</option>
                        {this.state.technicians.map(technician => {
                            return (
                                <option key={technician.employee_number} value={technician.employee_number}>
                                {technician.tech_name} ({technician.employee_number})

                                </option>
                            )
                        })}
                      </select>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="ownerName" value={this.state.ownerName} required type="text" id="ownerName" name="ownerName" className="form-control"/>
                      <label htmlFor="ownerName">ownerName</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="appointmentDate" value={this.state.appointmentDate} required type="date" id="appointmentDate" name="appointmentDate" className="form-control"/>
                      <label htmlFor="appointmentDate">appointmentDate</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="reason" value={this.state.reason} required type="text" id="reason" name="reason" className="form-control"/>
                      <label htmlFor="reason">reason of visit</label>
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

export default ServiceAppointmentForm;
