import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SaveButton from './SaveButton';
import UhOh from './UhOh';


export function DetailCard(props) {

    // initialize card from props
    const card = props.card;

    // render DetailCard
    return (
        card?.picture?.large ?
            <>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            sx={{ flexGrow: 1, marginTop: 3, marginBottom: 1 }}
                        >
                            <Grid item xs={12}>
                                <img src={card.picture.large} alt="large" />
                            </Grid>
                        </Grid>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5">{card.name.first} {card.name.last}</Typography>
                        <Typography className="mb-2 text-muted">
                            {card.email}
                        </Typography><br />
                        <Typography variant="h6">
                            Address<br />
                            <Typography variant="body1">
                                {card.location.street.number} {card.location.street.name}<br />
                                {card.location.city}, {card.location.state} {card.location.postcode}<br /><br />
                            </Typography>
                        </Typography>

                        <Typography variant="h6">
                            DOB<br />
                            <Typography variant="body1">
                                {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(card.dob.date))}<br /><br />
                            </Typography>
                        </Typography>

                        <Typography variant="h6">
                            Phone<br />
                            <Typography variant="body1">
                                {card.phone}
                            </Typography>
                        </Typography>
                    </CardContent >
                    <CardActions>
                        <SaveButton card={card} />
                    </CardActions>
                </Card >
            </> :
            <UhOh uhOhType="returnHome" />
    );
}
