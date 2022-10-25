import React from 'react';
import { getInstances } from '../common/api';



function DataTable(props) {

    let sales = props.sales;
    console.log(sales);

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
                        {sales.map((sale) => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>{sale.price}</td>
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
        };
    }

    async componentDidMount() {

        let data = await getInstances(8090, 'sales');
        console.log(data);
        this.setState({sales:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable shoes={this.state.sales} />
            </div>
    )
}
}

export default SalesList;
