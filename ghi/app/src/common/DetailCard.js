import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { UhOh } from './UhOh';

export function DetailCard(props) {

    const card = props.card;

    console.log(card);

    return (
        card?.picture?.large ?
            <>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={card.picture.large}
                        alt="card-img"
                    />
                    <CardContent>
                        <Typography variant="h5">{card.name.first} {card.name.last}</Typography>
                        <Typography className="mb-2 text-muted">
                            {card.email}
                        </Typography><br />

                        <Typography variant="h6">
                            Address:<br />
                            <Typography variant="body1">
                                {card.location.street.number} {card.location.street.name}<br />
                                {card.location.city}, {card.location.state} {card.location.postcode}<br /><br />
                            </Typography>
                        </Typography>

                        <Typography variant="h6">
                            DOB:<br />
                            <Typography variant="body1">
                                {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(card.dob.date))}<br /><br />
                            </Typography>
                        </Typography>

                        <Typography variant="h6">
                            Phone:<br />
                            <Typography variant="body1">
                                {card.phone}
                            </Typography>
                        </Typography>
                    </CardContent >
                </Card >
            </> :
            <UhOh />
    );
}
