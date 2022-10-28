import { useState, useEffect } from "react";
import { getInstances } from './common/api';

function AutomobileColumn(props) {

  return (
    <div className="col">
      {props.list.map(data => {
        const automobile = data.automobile;
        return (
          <div key={automobile.vin} className="card mb-3 shadow">
            <img src={automobile.model.picture_url} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{automobile.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {automobile.model.year} {automobile.model.manufacturer.name} {automobile.model.name}
              </h6>
              <p className="card-text">
                Classy vehicle right here!
              </p>
            </div>
            <div className="card-footer">
              Best vehicle in all the land!
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MainPage() {

  const [automobileColumns, setColumns] = useState([[],[],[]])

  useEffect(() => {
    const fetchAutomobiles = async () => {
        const automobilesData = await getInstances(8100, 'automobiles');
        console.log(automobilesData);

        let i = 0;

        for (let auto of automobilesData) {
          automobileColumns[i].push(auto);
          i++;
          if (i > 2) {
            i = 0;
          }
        }
        console.log(automobileColumns);
    }
    fetchAutomobiles();
    }, []);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>
      <div className="container">
        <h2>Automobiles</h2>
        <p>Or car(cars)? Who's to say?</p>
        <div className="row">
          {automobileColumns.map((automobileList, index) => {
            return (
              <AutomobileColumn key={index} list={automobileList} />
            );
          })}
        </div>
      </div>
      </>
  );
}

export default MainPage;
