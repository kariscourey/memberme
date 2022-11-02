import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import MainPage from './MainPage';
import AutoAutoNav from './Nav';

import AutomobileForm from './inventory/AutomobileForm';
import AutomobilesList from './inventory/AutomobilesList';
import ModelForm from './inventory/ModelForm';
import ModelsList from './inventory/ModelsList';
import ManufacturerForm from './inventory/ManufacturerForm';
import ManufacturersList from './inventory/ManufacturersList';

import SalesList from './sales/SalesList';
import SaleForm from './sales/SaleForm';
import CustomerForm from './sales/CustomerForm';
import SalesPersonForm from './sales/SalesPersonForm';

import ServiceForm from './service/ServiceForm';
import TechnicianForm from './service/TechnicianForm';
import ServicesList from './service/ServicesList';
import ServicesHistory from './service/ServicesHistory';

// TODO redirects
// TODO phone number
// TODO refresh



function App() {
  return (
    <BrowserRouter>
      <AutoAutoNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route path="" element={<SalesList />}></Route>
            <Route path="new" element={<SaleForm />}></Route>
          </Route>
          <Route path="customers">
            <Route path="new" element={<CustomerForm />}></Route>
          </Route>
          <Route path="sales_people">
            <Route path="new" element={<SalesPersonForm />}></Route>
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobilesList />}></Route>
            <Route path="new" element={<AutomobileForm />}></Route>
          </Route>
          <Route path="models">
            <Route path="" element={<ModelsList />}></Route>
            <Route path="new" element={<ModelForm />}></Route>
          </Route>
          <Route path="manufacturers">
            <Route path="" element={<ManufacturersList />}></Route>
            <Route path="new" element={<ManufacturerForm />}></Route>
          </Route>
          <Route path="services">
            <Route path="" element={<ServicesList />}></Route>
            <Route path="new" element={<ServiceForm />}></Route>
            <Route path="history" element={<ServicesHistory/>}></Route>

          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />}></Route>
          </Route>
          <Route
                path="*"
                element={
                  <div className="container">
                  <div className="row">
                    <div id="alert">
                      <div></div>
                    </div>
                    <div className="offset-3 col-6">
                      <div className="shadow p-4 mt-4">
                        <h1>Uh oh...</h1>
                        <p>This page doesn't exist.</p>
                        <p>Why don't you return <Link to={`/`}>home</Link>, friend?</p>
                      </div>
                    </div>
                  </div>
                </div>
                }
              />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
