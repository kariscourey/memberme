import { getInstances } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function DataTable(props) {

    let salesFiltered = props.salesFiltered;

    return (
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
                    {salesFiltered.map((sale) => {
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
    );
  }


export default function SalesList() {

    const [userInput, setUserInput] = useState(
        {
            salesPerson: '',
        }
    );

    const [loadData, setLoadData] = useState(
        {
            sales: [],
            salesFiltered: [],
            salesPeople: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                let data = {};
                data.sales = await getInstances(8090, 'sales');
                data.salesFiltered = data.sales;
                data.salesPeople = await getInstances(8090, 'sales_people');

                setLoadData(data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserInput({
            ...userInput, [name]:value
        });
    }


    const handleClick = async (event) => {
        event.preventDefault();

        let data = [...loadData.sales]

        if (userInput.salesPerson && userInput.salesPerson != "all") {
            data = data.filter(i => i.sales_person.employee_number == userInput.salesPerson);
        }

        setLoadData({
            ...loadData, salesFiltered:data
        });

    }

    if (loadData.sales.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create{' '}
                                <Link to={`/sales/new`}>sales</Link>?
                            </p>
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
                    <select onChange={handleChange} value={userInput.salesPerson} required id="salesPerson" name="salesPerson" className="form-select">
                        <option value="">Choose a sales person</option>
                        <option value="all">All</option>
                        {loadData.salesPeople.map(salesPerson => {
                            return (
                                <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                                    {salesPerson.name} ({salesPerson.employee_number})
                                </option>
                            )
                        })}
                    </select>
                    <span className="input-group-btn ml-3">
                        <button onClick={handleClick} className="btn btn-primary">Filter</button>
                    </span>
                </div>
                <div className="row">
                    <DataTable salesFiltered={loadData.salesFiltered} salesPeople={loadData.salesPeople} salesPerson={userInput.salesPerson} />
                </div>
            </>
        )
    }
}
