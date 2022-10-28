// import { SimpleList } from '../common/SimpleList (stretch)';


function DataTable(props) {

    let automobiles = props.automobiles;

    return (
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
    );
  }


export default function AutomobilesList() {

    // <SimpleList app='automobiles' port='8100' />
}
