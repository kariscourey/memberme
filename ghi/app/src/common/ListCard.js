import Card from '@mui/material/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setMember } from '../rtk-files/memberSlice';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { ListCardButton } from './ListCardButton';


export function ListCard(props) {

    const card = props.card;
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const routeChange = (value) => {
        let path = `/members/${value}`;
        navigate(path);
    }

    const handleClick = async (e) => {
        dispatch(setMember(card));
        routeChange(e.target.value);
    }

    return (
        <>
            <Card>
                <CardMedia>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        sx={{ flexGrow: 1, marginTop: 3, marginBottom: 1 }}
                    >
                        <Grid item xs={12}>
                            <img src={card.picture.thumbnail} />
                        </Grid>
                    </Grid>
                </CardMedia>
                <CardContent>
                    <ListCardButton onClick={handleClick} value={card.login.uuid}>
                        <Typography variant="h6">
                            {card.name.first} {card.name.last}
                        </Typography>
                    </ListCardButton>
                    <br />
                    <Typography variant="overline">
                        Age: {card.dob.age}
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
}
