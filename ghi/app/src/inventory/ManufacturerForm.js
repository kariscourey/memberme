import React from 'react';
import { createInstance } from '../common/api';
import { useState } from "react";

export default function ManufacturerForm() {
  const [userInput, setUserInput] = useState(
      {
          name: '',
      }
  );

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

      const response = await createInstance(8100, 'manufacturers', data);

      if (response.ok) {

          const cleared = {
              name: '',
          };
          setUserInput(cleared);
      }

  }

  return (
      <div className="container">
          <div className="row">
              <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                      <h1>Create a manufacturer</h1>
                      <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                          <input onChange={handleChange} placeholder="Name" value={userInput.name} required type="text" id="name" name="name" className="form-control"/>
                          <label htmlFor="name">Name</label>
                      </div>
                      <button className="btn btn-primary">Create</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}
