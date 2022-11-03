import { useState, useEffect } from "react";
import { getInstances } from './common/api';

function AutomobileColumn(props) {

    return (
    <div className="col">
        {props.list.map(automobile => {

        return (
            <div key={automobile.vin} className="card mb-4 shadow">
                <img src={automobile.model.picture_url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{automobile.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                    {automobile.model.manufacturer.name} {automobile.model.name}
                    </h6>
                    <p className="card-text">
                        Made in {automobile.year}, this {automobile.color.toLowerCase()} {' '}
                        {automobile.model.manufacturer.name} {automobile.model.name} {' '}
                        is one of our best in stock!
                    </p>
                </div>
            </div>
        );
        })}
    </div>
    );
}

function MainPage() {

  const [automobileColumns, setColumns] = useState([[],[],[]]);

  const [cards, setCards] = useState(<></>);

  useEffect(() => {
    const fetchAutomobiles = async () => {
        const automobilesData = await getInstances(8100, 'automobiles');

        let i = 0;
        let automobileCols = [[],[],[]]

        for (let auto of automobilesData) {
            automobileCols[i].push(auto);
            i++;
            if (i > 2) {
            i = 0;
            }
        }
        setColumns(automobileCols);

        if (automobileColumns[0].length !== 0)
        {
            setCards(
                <>
                    <h2 className="mb-3">Automobiles</h2>
                    <div className="row">
                        {automobileColumns.map((automobileList, index) => {
                        return (
                            <AutomobileColumn list={automobileList} key={index}  />
                        );
                        })}
                    </div>
                </>
                );
        }
    }
    fetchAutomobiles();
    }, []);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">AutoAuto</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>
      <div className="container">
        {cards}
      </div>
      </>
  );
}

export default MainPage;
