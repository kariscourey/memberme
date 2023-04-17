import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";


export function UhOh(props) {

    const uhOhType = props.uhOhType;

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                {uhOhType == "noData" ?
                    <><Typography variant="h2">Uh oh...</Typography><Typography variant="body1">No data to show.</Typography></> :
                    <Typography variant="body1">This page doesn't exist.<br />Why don't you return <Link href="/">home</Link>, friend?</Typography>
                }
            </Box>
        </Container>
    );
}
