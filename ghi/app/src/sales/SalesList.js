import React from 'react';
import { getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';
import { Link } from "react-router-dom";


function DataTable(props) {

    let sales_filtered = props.sales_filtered;

    return (
        <>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sales price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales_filtered.map((sale) => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>${sale.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    );
  }


class SalesList extends React.Component {

    state = {
        sales: [],
        sales_filtered: [],
        salesPeople: [],
        salesPerson: '',
    };

    async componentDidMount() {
        let data = await getInstances(8090, 'sales');
        this.setState({sales:data, sales_filtered:data});
        data = await getInstances(8090, 'sales_people');
        this.setState({salesPeople:data});
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }


    handleClick = async (event) => {
        event.preventDefault();

        let data = [...this.state.sales]

        if (this.state.salesPerson != "all" && this.state.salesPerson) {
            data = data.filter(i => i.sales_person.employee_number == this.state.salesPerson);
        }

        this.setState({sales_filtered:data});

    }


    render() {

        if (this.state.sales.length === 0) {
            return (
                <div className="container">
                <div className="row">
                  <div id="alert">
                    <div></div>
                  </div>
                  <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                      <h1>Uh oh...</h1>
                      <p>No data to show. Care to make a{' '}
                            <Link to={`/sales/new`}>sale</Link>
                        ?</p>
                    </div>
                  </div>
                </div>
              </div>
              )
        } else {
            return (
                <>
                    <div>
                        <h1 className="mt-3">Sales</h1>
                    </div>

                    <div className="input-group mb-3">

                        <select onChange={this.handleChange} value={this.state.salesPerson} required id="salesPerson" name="salesPerson" className="form-select">
                            <option value="">Choose a sales person</option>
                            <option value="all">All</option>
                            {this.state.salesPeople.map(salesPerson => {
                                return (
                                    <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                                        {salesPerson.name} ({salesPerson.employee_number})
                                    </option>
                                )
                            })}
                        </select>
                        <span className="input-group-btn ml-3">
                            <button onClick={this.handleClick} className="btn btn-secondary">Filter</button>
                        </span>
                    </div>

                    <div className="row">
                        <DataTable sales_filtered={this.state.sales_filtered} salesPeople={this.state.salesPeople} salesPerson={this.state.salesPerson} />
                    </div>
                </>
        )
    }
}
}

export default SalesList;
