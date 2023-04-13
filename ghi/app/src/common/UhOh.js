import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export function UhOh() {

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">
                    Uh oh...
                </Typography>
                <Typography variant="body1">
                    <p>This page doesn't exist.</p>
                    <p>Why don't you return <Link href="/">home</Link>, friend?</p>
                </Typography>
            </Box>
        </Container>
    );
}
