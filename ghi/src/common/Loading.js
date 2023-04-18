import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export function Loading() {

  // render Loading
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    </Container>
  );
}
