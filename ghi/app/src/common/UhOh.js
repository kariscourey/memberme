import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


export function UhOh() {

    return (
        <Container>
            <Grid>
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Uh oh...</h1>
                        <p>This page doesn't exist.</p>
                        <p>Why don't you return <Link to={`/`}>home</Link>, friend?</p>
                    </div>
                </div>
            </Grid>
        </Container>
    );
}
