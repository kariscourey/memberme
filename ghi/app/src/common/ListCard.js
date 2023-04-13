import Card from '@mui/material/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setMember } from '../rtk-files/memberSlice';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    // height="48"
                    image={card.picture.thumbnail}
                    alt="card-img"
                />
                <CardContent>
                    <Button onClick={handleClick} value={card.login.uuid}>{card.name.first} {card.name.last}</Button>
                    <Typography>
                        Age: {card.dob.age}
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
}
