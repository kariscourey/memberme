import React from 'react';
import { createInstance } from '../common/api';
import { handleChange } from '../common/synthetic';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employeeNumber: '',
        };

        this.handleChange = handleChange.bind(this);
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber;

        console.log(data);

        const response = await createInstance(8090, 'sales_people', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              name: '',
              employeeNumber: '',
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
                  <h1>Create a sales person</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Employee number" value={this.state.employeeNumber} required type="employeeNumber" id="employeeNumber" name="employeeNumber" className="form-control"/>
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
}

export default SalesPersonForm;
