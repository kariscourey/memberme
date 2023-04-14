import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ListCard } from './ListCard';


export function CardList(props) {

    const cards = props.cards;

    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {cards.map((card, index) => (
                    <Grid item key={index} xs={12} sm={4} md={3}>
                        <ListCard card={card} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
