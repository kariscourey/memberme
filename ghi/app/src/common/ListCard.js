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

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    // height="140"
                    image={card.picture.thumbnail}
                    alt="card-img"
                />
                <CardContent>
                    <Button onClick={handleClick} value={card.login.uuid} variant="link">{card.name.first} {card.name.last}</Button>
                    <Typography className="card-subtitle mb-2 text-muted">
                        {card.dob.age}
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
}
