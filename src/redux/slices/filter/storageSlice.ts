import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStorageSlice {
    value: string;
}

const initialState: IStorageSlice = {
    value: 'Все',
};

const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        setStorage(state, action: PayloadAction<IStorageSlice>) {
            state.value = action.payload.value;
        },
    },
});

export const { setStorage } = storageSlice.actions;
export default storageSlice.reducer;
