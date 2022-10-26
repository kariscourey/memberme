import React from 'react';
import { getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';

// TODO filter

function DataTable(props) {

    let sales = props.sales;
    let salesPeople = props.salesPeople;
    // console.log(sales);
    let salesPerson = '';

    return (
        <>
            <div>
                <h1 className="mt-3">Sales</h1>
            </div>

            <div className="mb-3">
                <select onChange={handleChange} value={salesPerson} required id="salesPerson" name="salesPerson" className="form-select">
                <option value="">Choose a sales person</option>
                {salesPeople.map(salesPerson => {
                    return (
                        <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                            {salesPerson.name} ({salesPerson.employee_number})
                        </option>
                    )
                })}
                </select>
                <button className="btn btn-primary">Filter</button>
            </div>

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
                        {sales.map((sale) => {
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

    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            salesPeople: [],
        };
    }

    async componentDidMount() {

        let data = await getInstances(8090, 'sales');
        this.setState({sales:data});
        data = await getInstances(8090, 'sales_people');
        this.setState({salesPeople:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable sales={this.state.sales} salesPeople={this.state.salesPeople} />
            </div>
    )
}
}

export default SalesList;
