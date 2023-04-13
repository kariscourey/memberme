import { DetailCard } from "../common/DetailCard";
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';


export default function Member() {

    const { card } = useSelector(state => state.memberSlice);

    return (
        <Container>
            <DetailCard card={card} />
        </Container>
    );
}
