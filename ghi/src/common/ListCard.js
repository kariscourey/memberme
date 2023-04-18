import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setMember } from '../rtk-files/memberSlice';
import { ListCardButton } from './ListCardButton';
import SaveButton from './SaveButton';



export default function ListCard(props) {

    // initialize card from props
    const card = props.card;

    // navigate to path based on input value
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const routeChange = (value) => {
        let path = `/members/${value}`;
        navigate(path);
    }

    // click handler
    const handleClick = async (e) => {

        // dispatch card to store (memberSlice)
        dispatch(setMember(card));

        // change route (pseudoroute)
        routeChange(e.target.value);
    }

    // render ListCard
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
                            <img src={card?.picture?.thumbnail} alt="thumbnail" />
                        </Grid>
                    </Grid>
                </CardMedia>
                <CardContent>
                    <ListCardButton value={card.login.uuid} onClick={handleClick} >
                        {card.name.first} {card.name.last}
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
