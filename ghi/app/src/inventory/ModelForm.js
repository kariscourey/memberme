import React from 'react';
import { createInstance, getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';


class ModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pictureUrl: '',
            manufacturers: [],
        };

        this.handleChange = handleChange.bind(this);
    }

    async componentDidMount() {

      try {

        const manufacturers = await getInstances(8100, 'manufacturers');

        return (
            this.setState({manufacturers: manufacturers})
          );

        } catch (e) {
            console.error(e);
          }

      }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.pictureUrl;
        delete data.pictureUrl;
        delete data.manufacturers;

        console.log(data);

        const response = await createInstance(8100, 'models', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              name: '',
              pictureUrl: '',
              manufacturer_id: '',
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
                  <h1>Create a model</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Picture URL" value={this.state.pictureUrl} required type="text" id="pictureUrl" name="pictureUrl" className="form-control"/>
                      <label htmlFor="pictureUrl">Picture URL</label>
                    </div>
                    <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.manufacturer_id} required id="manufacturer_id" name="manufacturer_id" className="form-select">
                        <option value="">Choose a manufacturer</option>
                        {this.state.manufacturers.map(manufacturer => {
                            return (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name}
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

export default ModelForm;
