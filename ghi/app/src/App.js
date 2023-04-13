import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import MainPage from './MainPage';
import Member from './components/Member';
import MemberMeNav from './Nav';
import { UhOh } from './common/UhOh';


function App() {
    return (
        <BrowserRouter>
            <MemberMeNav />
            <Container>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="members">
                        <Route path=":memberId" element={<Member />}></Route>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <UhOh />
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
