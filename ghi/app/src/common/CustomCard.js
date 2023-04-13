import Card from 'react-bootstrap/Card';

export function CustomCard(props) {
    return (
        <>
            <style type="text/css">
                {`
                /* https://codingyaar.com/bootstrap-4-card-image-left-responsive/ */

                .card {
                    flex-direction: row;
                    align-items: center;
                }

                .card-title {
                    font-weight: bold;
                }

                .card img {
                    width: 48px;
                    margin-left: 2%;
                }

                @media only screen and (max-width: 768px) {
                    a {
                        display: none;
                    }

                    .card-body {
                        padding: 0.5em 1.2em;
                    }

                    .card-body .card-text {
                        margin: 0;
                    }
                }
                `}
            </style>

            <Card className="card mb-4 shadow">
                <Card.Img src={props.thumbnail} className="card-img-top" />
                <Card.Body>
                    <Card.Link href="#"><Card.Title>{props.first} {props.last}</Card.Title></Card.Link>
                    <Card.Text className="card-subtitle mb-2 text-muted">
                        {props.age}
                    </Card.Text>
                </Card.Body>
            </Card >
        </>
    );
}
