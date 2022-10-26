import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

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

// import ServicesList from './service/ServicesList';
// import ServiceForm from './service/ServiceForm';
// import ServiceAppointmentForm from './service/ServiceAppointmentForm';
// import TechnicianForm from './service/TechnicianForm';
// import ServiceAppointmentsList from './service/ServiceAppointmentsList';

// TODO form validation

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
          {/* <Route path="services">
            <Route path="" element={<ServiceAppointmentsList />}></Route>
            <Route path="new" element={<ServiceAppointmentForm />}></Route>
          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />}></Route>
          </Route> */}
          <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
