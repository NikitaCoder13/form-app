import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDataImport from '../../../models/IDataImport';

interface IData {
    value: IDataImport[];
}

const initialState: IData = {
    value: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<IData>) {
            state.value = action.payload.value;
        },
    },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
