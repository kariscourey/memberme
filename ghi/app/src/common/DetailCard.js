import Card from 'react-bootstrap/Card';

export function DetailCard(props) {

    const card = props.card;

    return (
        <Card className="mb-3 shadow">
            <Card.Img src={card.picture.large} className="card-img-top" />
            <Card.Body>
                <Card.Title>{card.name.first} {card.name.last}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {card.location.street}{' '}
                    {card.location.city}, {card.location.state}{' '}
                    {card.location.postcode}
                </Card.Subtitle>
                <Card.Text>
                    {card.email}{' '}
                    {card.dob.date}{' '}
                    {card.phone}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
