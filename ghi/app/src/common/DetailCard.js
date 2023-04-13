import Card from 'react-bootstrap/Card';
import { UhOh } from './UhOh';

export function DetailCard(props) {

    const card = props.card;

    console.log(card);

    return (
        card?.picture?.large ?
        <>
        <Card className="mb-3 shadow">
            <Card.Img src={card.picture.large} />
            <Card.Body>
                <Card.Title>{card.name.first} {card.name.last}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {card.email}
                </Card.Subtitle>
                <Card.Text>
                    {card.location.street.number} {card.location.street.name}<br />
                    {card.location.city}, {card.location.state} {card.location.postcode}<br />
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(card.dob.date))}<br />
                    {card.phone}
                </Card.Text>
            </Card.Body>
        </Card>
        </> :
        <UhOh />
    );
}
