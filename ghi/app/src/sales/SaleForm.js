import React from 'react';
import { createInstance } from '../common/api';
import { handleChange } from '../common/synthetic';

class SaleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            automobiles: [],
            salesPeople: [],
            customers: [],
        };

        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

      try {

        const requests = [];
        const urls = [
          'http://localhost:8100/api/automobiles/',
          'http://localhost:8090/api/sales_people',
          'http://localhost:8090/api/customers',
      ]

        // for (let url of urls) {
        //   requests.push(fetch(url));
        // }

        requests.map(url => fetch(url));
        const responses = await Promise.all(requests);

        responses.map(async response => {
          let data = await response.json();
          return (
            this.setState({locations: data.locations})
          );
        })

        // if (response.ok) {
        //     const data = await response.json();
        //     this.setState({locations: data.locations});
        //     }

        } catch (e) {
            console.error(e);
          }

      }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.salesPerson;
        delete data.salesPerson;

        console.log(data);

        const response = await createInstance(8090, 'sales', data);

        if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              price: '',
              automobile: '',
              salesPerson: '',
              customer: '',
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
                  <h1>Create a sale record</h1>
                  <form onSubmit={this.handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Name" value={this.state.name} required type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Address" value={this.state.starts} required type="date" id="address" name="address" className="form-control"/>
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Phone number" value={this.state.ends} required type="phoneNumber" id="phoneNumber" name="phoneNumber" className="form-control"/>
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

export default SaleForm;
