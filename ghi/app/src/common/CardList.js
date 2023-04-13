import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ListCard } from './ListCard';


export function CardList(props) {

    const cards = props.cards;

    console.log(cards);

    return (
        <Container sx={{ py: 8 }}>
            <Row spacing={4}>
                {cards.map((card, index) => (
                    <Col item key={index} xs={12} sm={6} md={4}>
                        <ListCard card={card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
