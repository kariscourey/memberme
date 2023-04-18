import { createSlice } from '@reduxjs/toolkit';

// initialize state
const initialState = {
    card: {},
}

// create memberSlice for use in store
export const memberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    reducers: {
        // define setMember based on input (card)
        setMember: (state, card) => {
            if (card) {
                state.card = card.payload;
            } else {
                state.card = initialState.card;
            }
        },
    },
});

// export setMember
export const {
    setMember
} = memberSlice.actions;
