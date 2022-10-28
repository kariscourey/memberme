import React from 'react';
import { getInstances } from '../common/api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function DataTable(props) {

    let models = props.models;

    return (
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
    );
}


export default function ModelsList() {

    const [loadData, setLoadData] = useState(
        {
            models: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const data = await getInstances(8100, 'models');

                setLoadData({
                    ...loadData, models:data
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    if (loadData.models.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create a{' '}
                                <Link to={`/models/new`}>model</Link>?
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
                    <h1 className="mt-3">Models</h1>
                </div>
                <div className="row">
                    <DataTable models={loadData.models} />
                </div>
            </>
        )
    }
}
