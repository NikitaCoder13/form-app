import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRegion {
    value: string;
}

const initialState: IRegion = {
    value: 'Все',
};

const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        setRegion(state, action: PayloadAction<IRegion>) {
            state.value = action.payload.value;
        },
    },
});

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;
