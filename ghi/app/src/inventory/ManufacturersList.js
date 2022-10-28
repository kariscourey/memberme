import React from 'react';
import { getInstances } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function DataTable(props) {

    let manufacturers = props.manufacturers;

    return (
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
    );
  }


export default function ManufacturersList() {

    const [loadData, setLoadData] = useState(
        {
            manufacturers: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const data = await getInstances(8100, 'manufacturers');

                setLoadData({
                    ...loadData, manufacturers:data
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    if (loadData.manufacturers.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create a{' '}
                                <Link to={`/manufacturers/new`}>manufacturer</Link>?
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
                    <h1 className="mt-3">Manufacturers</h1>
                </div>
                <div className="row">
                    <DataTable manufacturers={loadData.manufacturers} />
                </div>
            </>
        )
    }
}
