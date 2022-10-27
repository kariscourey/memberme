import React from 'react';
import { createInstance } from '../common/api';
import { handleChange } from '../common/synthetic';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
        };

        this.handleChange = handleChange.bind(this);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        data.phone_number = data.phoneNumber;
        delete data.phoneNumber;

        console.log(data);

        const response = await createInstance(8090, 'customers', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
                name: '',
                address: '',
                phoneNumber: '',
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
                  <h1>Create a customer</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Address" value={this.state.address} required type="text" id="address" name="address" className="form-control"/>
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Phone number" value={this.state.phoneNumber} required type="text" id="phoneNumber" name="phoneNumber" className="form-control"/>
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
}

export default CustomerForm;
