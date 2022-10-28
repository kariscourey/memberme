import React from 'react';
import { createInstance, getInstances } from '../common/api';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function AutomobileForm () {

    const [userInput, setUserInput] = useState(
        {
            color: '',
            year: '',
            vin: '',
            model_id: '',
        }
    );

    const [loadData, setLoadData] = useState(
        {
            models: [],
        }
    );

    const [noData, setNoData] = useState([]);
    const [alert, setAlert] = useState(<></>);

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const models = await getInstances(8100, 'models');
                setLoadData({
                    ...loadData, models:models
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUserInput({
            ...userInput, [name]:value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...userInput};

        let response = await createInstance(8100, 'automobiles', data);

        if (response.ok) {

            const cleared = {
                color: '',
                year: '',
                vin: '',
                model_id: '',
            };
            setUserInput(cleared);
            setNoData(false);
            setAlert(false);
        } else {
            setAlert(<><div className="alert alert-primary mt-3" role="alert"><div>Invalid input!</div></div></>);
        }
    }
      // refreshPage();  // how to change the timing?

    if (noData.length > 0) {
        return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Uh oh...</h1>
                        <p>You're missing{' '}
                            {noData.map(i => {
                                return (
                                <Link key={i} to={`/${i}/new`}>{i}</Link>
                                )
                            }
                            )}
                        {' '}data!</p>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="container">
                {alert}
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Create an automobile</h1>
                            <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} placeholder="Color" value={userInput.color} required type="text" id="color" name="color" className="form-control"/>
                                <label htmlFor="name">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} placeholder="Year" value={userInput.year} required type="number" id="year" name="year" className="form-control"/>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} placeholder="VIN" value={userInput.vin} required type="text" id="vin" name="vin" className="form-control"/>
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleChange} value={userInput.model_id} required id="model_id" name="model_id" className="form-select">
                                    <option value="">Choose a model</option>
                                    {loadData.models.map(model => {
                                        return (
                                            <option key={model.id} value={model.id}>
                                                {model.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
