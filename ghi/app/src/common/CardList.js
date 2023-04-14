import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ListCard } from './ListCard';
import { Typography } from '@mui/material';


export function CardList(props) {

    const cards = props.cards;

    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {cards.length != 0 ?
                    cards.map((card, index) => (
                        <Grid item key={index} xs={12} sm={4} md={3}>
                            <ListCard card={card} />
                        </Grid>
                    )) :
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="body1">
                            No members match!
                        </Typography>
                    </Grid>}
            </Grid>
        </Container>
    );
}
