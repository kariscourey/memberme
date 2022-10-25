import React from 'react';
import { createInstance } from '../common/api';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange (event) {
        const value = event.target.value;
        this.setState({name: value});
    }

    handleAddressChange (event) {
        const value = event.target.value;
        this.setState({address: value});
    }

    handlePhoneNumberChange (event) {
        const value = event.target.value;
        this.setState({phoneNumber: value});
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.phone_number = data.phoneNumber;
        delete data.phoneNumber;

        console.log(data);

        ok = await createInstance(8090, 'customers', data);

        if (ok) {
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
                  <h1>Create a new conference</h1>
                  <form onSubmit={this.handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                      <input onChange={this.handleNameChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleAddressChange} placeholder="Address" value={this.state.starts} required type="date" id="address" name="address" className="form-control"/>
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handlePhoneNumberChange} placeholder="Phone number" value={this.state.ends} required type="phoneNumber" id="phoneNumber" name="phoneNumber" className="form-control"/>
                      <label htmlFor="phoneNumber">Phone Number</label>
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
