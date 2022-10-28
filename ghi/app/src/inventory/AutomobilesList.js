import React from 'react';
import { getInstances } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


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

    const [loadData, setLoadData] = useState(
        {
            automobiles: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const data = await getInstances(8100, 'automobiles');

                setLoadData({
                    ...loadData, automobiles:data
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    if (loadData.automobiles.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create a{' '}
                                <Link to={`/automobiles/new`}>automobile</Link>?
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
                    <h1 className="mt-3">Automobiles</h1>
                </div>
                <div className="row">
                    <DataTable automobiles={loadData.automobiles} />
                </div>
            </>
        )
    }
}
