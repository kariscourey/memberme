import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import { useCreateOrUpdateSavedMemberMutation } from '../rtk-files/savedMembersApi';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SaveButton(props) {
    const [open, setOpen] = React.useState(false);

    const card = props.card;
    const [createOrUpdateSavedMember] = useCreateOrUpdateSavedMemberMutation();

    const handleClick = (e) => {
        e.preventDefault();
        createOrUpdateSavedMember(
            {
                name_first: card.name.first,
                name_last: card.name.last,
                dob_date: card.dob.date,
                dob_age: card.dob.age,
                email: card.email,
                street_number: card.location.street.number,
                street_name: card.location.street.name,
                city: card.location.city,
                state: card.location.state,
                postcode: card.location.postcode,
                thumbnail: card.picture.thumbnail,
                large: card.picture.large,
                phone: card.phone,
                uuid: card.login.uuid
            }
        );
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <IconButton size="small" onClick={handleClick}>
                <TurnedInNotIcon />
            </IconButton>
            <Snackbar
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    Saved!
                </Alert>
            </Snackbar>
        </ >
    );
}
