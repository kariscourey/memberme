import React from 'react';
import { getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';


function DataTable(props) {

    let automobiles = props.automobiles;
    // console.log(automobiles);

    return (
        <>
            <div>
                <h1 className="mt-3">Automobiles</h1>
            </div>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Year</th>
                            <th>VIN</th>
                            <th>Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {automobiles.map((automobile) => {
                            return (
                                <tr key={automobile.id}>
                                    <td>{automobile.color}</td>
                                    <td>{automobile.year}</td>
                                    <td>{automobile.vin}</td>
                                    <td>{automobile.model.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    );
  }


class AutomobilesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            automobiles: [],
        };
    }

    async componentDidMount() {

        let data = await getInstances(8100, 'automobiles');
        this.setState({automobiles:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable automobiles={this.state.automobiles} />
            </div>
    )
}
}

export default AutomobilesList;
