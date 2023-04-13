import Card from 'react-bootstrap/Card';

export function DetailCard(props) {

    const card = props.card;

    console.log(card);


    return (
        <Card className="mb-3 shadow">
            <Card.Img src={card.picture.large} className="card-img-top" />
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
    );
}
