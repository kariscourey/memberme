import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    card: {},
}


export const memberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    reducers: {
        setMember: (state, card) => {
            if (card) {
                state.card = card.payload;
            } else {
                state.card = initialState.card;
            }
        },
    },
});

export const {
    setMember
} = memberSlice.actions;
