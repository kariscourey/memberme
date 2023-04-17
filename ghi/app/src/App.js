import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import MemberMeNav from './Nav';
import { UhOh } from './common/UhOh';
import Member from './components/Member';
import SavedMembersList from './components/SavedMembersList';

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '');

function App() {
    return (
        <BrowserRouter basename={basename}>
            <MemberMeNav />
            <Container>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="members">
                        <Route path=":memberUuid" element={<Member />}></Route>
                    </Route>
                    <Route path="saved" element={<SavedMembersList />}></Route>
                    <Route
                        path="*"
                        element={
                            <UhOh uhOhType="returnHome" />
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
