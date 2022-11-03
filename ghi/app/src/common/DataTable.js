import { toTitleCase } from './format';

export function DataTable(props) {

    let data = props.data;
    let headers = Object.keys(data[0]);
    const remove = ['sold', 'id', 'href']
    headers = headers.filter(function(e) { return !remove.includes(e) })
    const rows = Object.values(data);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {headers.map((header, index) => {
                            if (header.includes('_url')) {
                                return (
                                    <th key={index}>
                                        {toTitleCase(header.replace('_url',''))}
                                    </th>
                                )
                            } else if (header.includes('_')) {
                                return (
                                    <th key={index}>
                                        {toTitleCase(header.replace('_',' '))}
                                    </th>
                                )
                            }
                            return (
                                <th key={index}>
                                    {toTitleCase(header)}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, r_index) => {
                        return (
                            <tr key={r_index}>
                                {headers.map((header, index) => {

                                    if (row[header].hasOwnProperty('name')) {
                                        return (
                                            <td key={index}>{row[header].name}</td>
                                        )
                                    } else if (typeof row[header] == 'string' && row[header].includes('http')) {
                                        return (
                                            <td key={index}><img style={{ width: 100 }} src={row[header]} /></td>
                                        )
                                    } else {
                                        return (
                                            <td key={index}>{row[header]}</td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
