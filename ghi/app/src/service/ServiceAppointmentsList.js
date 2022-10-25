import React from 'react';
import { getInstances } from '../common/api';


function DataTable(props) {

    let examples = props.examples;

    return (
        <>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examples.map((example) => {
                            return (
                                <tr key={example.id}>
                                    <td>{example.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    );
  }


class AppointmentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            examples: [],
        };
    }

    async componentDidMount() {

        let data = await getInstances(0000, 'examples');
        this.setState({examples:data});

    }


    render() {
        return (
            <div className="row">
                <DataTable examples={this.state.examples} />
            </div>
    )
}
}

export default AppointmentsList;
