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
            first_name: card.name.first,
            last_name: card.name.last,
            age: card.dob.age,
            email: card.email,
            postal_address: card.location.city,
            thumbnail: card.picture.thumbnail,
            dob: card.dob.date,
            phone: card.phone,
            uuid: card.login.uuid
        }))}>
            <TurnedInNotIcon />
        </IconButton>
    );
}
