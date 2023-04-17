import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { IconButton } from '@mui/material';
import * as React from 'react';
import { useCreateOrUpdateSavedMemberMutation } from '../rtk-files/savedMembersApi';
import { preventDefault } from './util';

export default function SaveButton(props) {

    const card = props.card;
    const [createOrUpdateSavedMember] = useCreateOrUpdateSavedMemberMutation();


    return (
        <IconButton size="small" onClick={preventDefault(createOrUpdateSavedMember, () => ({
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
            phone: card.phone,
            uuid: card.login.uuid
        }))}>
            <TurnedInNotIcon />
        </IconButton>
    );
}
