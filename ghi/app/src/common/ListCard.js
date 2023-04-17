import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setMember } from '../rtk-files/memberSlice';
import { ListCardButton } from './ListCardButton';
import SaveButton from './SaveButton';



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
                            <img src={card?.picture?.thumbnail} />
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
                <CardActions>
                    <SaveButton card={card} />
                </CardActions>
            </Card >
        </>
    );
}
