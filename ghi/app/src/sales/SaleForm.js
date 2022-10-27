import React from 'react';
import { createInstance, getInstancesFromManyRequests, getFilteredInstances, updateInstance } from '../common/api';
import { handleChange } from '../common/synthetic';
import { refreshPage } from '../common/window';
import { Link } from "react-router-dom";


class SaleForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: '',
      automobiles: [],
      salesPeople: [],
      customers: [],
      noData: [],
    };

    this.handleChange = handleChange.bind(this);
  }

    async componentDidMount() {

      try {

        const urls = [
          'http://localhost:8090/api/sales_people',
          'http://localhost:8090/api/customers',
        ]

        const obj = await getInstancesFromManyRequests(urls);

        const app = 'automobiles'
        const data = await getFilteredInstances(8100, app, 'sold', false)
        obj[app] = data;

        const checkData = Object.keys(obj).filter(i => obj[i].length == 0);

        if (checkData.length > 0) {
          this.setState({noData: checkData})
        }

        return (
            this.setState(obj)
          );

        } catch (e) {
            console.error(e);
          }

      }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        data.sales_person = data.salesPerson;
        delete data.salesPerson;
        delete data.automobiles;
        delete data.salesPeople;
        delete data.customers;
        delete data.sold;
        delete data.noData;

        console.log(data);

        let response = await createInstance(8090, 'sales', data);

        if (response.ok) {

            const vin = data.automobile;
            response = await updateInstance(8100, 'automobiles', vin, {sold: true});

            if (response.ok) {
            const newInstance = await response.json();
            console.log(newInstance);

            const cleared = {
              price: '',
              automobile: '',
              salesPerson: '',
              customer: '',
              noData: false,
            };
            this.setState(cleared);
        }
      }
      // refreshPage();  // how to change the timing?
    }

    render() {
        if (this.state.noData.length > 0) {
          return (
            <div className="container">
            <div className="row">
              <div id="alert">
                <div></div>
              </div>
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Uh oh...</h1>
                  <p>You're missing{' '}
                    {this.state.noData.map(i => {
                      return (
                        <Link key={i} to={`/${i}/new`}>{i}</Link>
                       )
                    }
                    )}
                    {' '}data!</p>
                </div>
              </div>
            </div>
          </div>
          )
        } else {
          return (
            <div className="container">
            <div className="row">
              <div id="alert">
                <div></div>
              </div>
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Create a sale record</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChange} placeholder="Price" value={this.state.price} required type="number" min="0" id="price" name="price" className="form-control"/>
                      <label htmlFor="price">Price</label>
                    </div>
                    <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.automobile} required id="automobile" name="automobile" className="form-select">
                        <option value="">Choose an automobile</option>
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
                      <select onChange={this.handleChange} value={this.state.salesPerson} required id="salesPerson" name="salesPerson" className="form-select">
                        <option value="">Choose a sales person</option>
                        {this.state.salesPeople.map(salesPerson => {
                            return (
                                <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                                    {salesPerson.name} ({salesPerson.employee_number})
                                </option>
                            )
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <select onChange={this.handleChange} value={this.state.customer} required id="customer" name="customer" className="form-select">
                        <option value="">Choose a customer</option>
                        {this.state.customers.map(customer => {
                            return (
                                <option key={customer.phone_number} value={customer.phone_number}>
                                    {customer.name} ({customer.phone_number})
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
}

export default SaleForm;
