import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import MemberMeNav from './Nav';

import AutomobileForm from './inventory/AutomobileForm';
import AutomobilesList from './inventory/AutomobilesList';
import ManufacturerForm from './inventory/ManufacturerForm';
import ManufacturersList from './inventory/ManufacturersList';
import ModelForm from './inventory/ModelForm';
import ModelsList from './inventory/ModelsList';

import EmployeeForm from './employees/EmployeeForm';
import EmployeesList from './employees/EmployeesList';

import CustomerForm from './customers/CustomerForm';
import CustomersList from './customers/CustomersList';

import SaleForm from './sales/SaleForm';
import SalesList from './sales/SalesList';

import ServiceForm from './service/ServiceForm';
import ServicesHistory from './service/ServicesHistory';
import ServicesList from './service/ServicesList';


function App() {
  return (
    <BrowserRouter>
      <MemberMeNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route path="" element={<SalesList />}></Route>
            <Route path="new" element={<SaleForm />}></Route>
          </Route>
          <Route path="customers">
            <Route path="" element={<CustomersList />}></Route>
            <Route path="new" element={<CustomerForm />}></Route>
          </Route>
          <Route path="employees">
            <Route path="" element={<EmployeesList />}></Route>
            <Route path="new" element={<EmployeeForm />}></Route>
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
            <Route path="history" element={<ServicesHistory />}></Route>
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
