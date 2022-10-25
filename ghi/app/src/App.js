import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import SalesList from './sales/SalesList';
import SaleForm from './sales/SaleForm';
import CustomerForm from './sales/CustomerForm';
import SalesPersonForm from './sales/SalesPersonForm';

// import ServicesList from './service/ServicesList';
// import ServiceForm from './service/ServiceForm';
// import ServiceAppointmentForm from './service/ServiceAppointmentForm';
// import TechnicianForm from './service/TechnicianForm';
// import ServiceAppointmentsList from './service/ServiceAppointmentsList';

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
