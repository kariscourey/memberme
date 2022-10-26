import React from 'react';
import { createInstance } from '../common/api';
import { handleChange } from '../common/synthetic';


class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };

        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        console.log(data);

        const response = await createInstance(8100, 'manufacturers', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              name: '',
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
                  <h1>Create a manufacturer</h1>
                  <form onSubmit={this.handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
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

export default ManufacturerForm;
