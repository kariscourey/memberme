import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MainPage from './MainPage';
import MemberMeNav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <MemberMeNav />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="sales">
            <Route path="" element={<SalesList />}></Route>
            <Route path="new" element={<SaleForm />}></Route>
          </Route> */}
          <Route
            path="*"
            element={
              <Container>
                <Row>
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
                </Row>
              </Container>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
