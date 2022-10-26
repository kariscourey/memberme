import React from 'react';
import { createInstance, getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';


class AutomobileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            year: '',
            vin: '',
            models: [],
        };

        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

      try {

        const models = await getInstances(8100, 'models');

        return (
            this.setState({models: models})
          );

        } catch (e) {
            console.error(e);
          }

      }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.models;

        console.log(data);

        const response = await createInstance(8100, 'automobiles', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              color: '',
              year: '',
              vin: '',
              model_id: '',
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
                  <h1>Create an automobile</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Color" value={this.state.color} required type="text" id="color" name="color" className="form-control"/>
                      <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Year" value={this.state.year} required type="number" id="year" name="year" className="form-control"/>
                      <label htmlFor="year">Year</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="VIN" value={this.state.vin} required type="text" id="vin" name="vin" className="form-control"/>
                      <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.model_id} required id="model_id" name="model_id" className="form-select">
                        <option value="">Choose a model</option>
                        {this.state.models.map(model => {
                            return (
                                <option key={model.id} value={model.id}>
                                    {model.manufacturer.name} {model.name}
                                </option>
                            )
                        })}
                      </select>
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

export default AutomobileForm;
