import React from 'react';
import { getInstances } from './api';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function SimpleList(parentProps) {

    let app = parentProps.app;
    let port = parentProps.port;

    const [loadData, setLoadData] = useState(
        {
            list_data: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const data = await getInstances(port, app);

                setLoadData({
                    ...loadData, list_data:data
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    if (loadData.list_data.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Uh oh...</h1>
                            <p>
                                No data to show. Care to create a{' '}
                                <Link to={`/${app}/new`}>{app}</Link>?
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
                    <h1 className="mt-3">{app}.toUpperCase()</h1>
                </div>
                {/* <div className="row">
                    <DataTable automobiles={loadData.automobiles} />
                </div> */}
            </>
        )
    }
}
