import { DetailCard } from "../common/DetailCard";
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function Member() {

    // initialize card with state from memberSlice
    const { card } = useSelector(state => state.memberSlice);

    // render Member (profile/card)
    return (
        <>
            {
                card ?
                    <Container component="main" maxWidth="sm">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <DetailCard card={card} />
                        </Box>
                    </Container > :
                    <></>
            }
        </>

    );
}
