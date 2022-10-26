import React from 'react';
import { getInstances } from '../common/api';
import { handleChange } from '../common/synthetic';


function DataTable(props) {

    let models = props.models;
    // console.log(models);

    return (
        <>
            <div>
                <h1 className="mt-3">Models</h1>
            </div>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((model) => {
                            return (
                                <tr key={model.id}>
                                    <td><img style={{ width: 100 }} src={model.picture_url} /></td>
                                    <td>{model.name}</td>
                                    <td>{model.manufacturer.name}</td>
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
            models: [],
        };
    }

    async componentDidMount() {

        let data = await getInstances(8100, 'models');
        this.setState({models:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable models={this.state.models} />
            </div>
    )
}
}

export default ModelsList;
