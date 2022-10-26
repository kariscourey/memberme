import React from 'react';
import { getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';


function DataTable(props) {

    let manufacturers = props.manufacturers;
    // console.log(manufacturers);

    return (
        <>
            <div>
                <h1 className="mt-3">Manufacturers</h1>
            </div>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manufacturers.map((manufacturer) => {
                            return (
                                <tr key={manufacturer.id}>
                                    <td>{manufacturer.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    );
  }


class ModelsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
        };
    }

    async componentDidMount() {

        let data = await getInstances(8100, 'manufacturers');
        this.setState({manufacturers:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable manufacturers={this.state.manufacturers} />
            </div>
    )
}
}

export default ModelsList;
