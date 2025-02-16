import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDataImport from '../../../models/IDataImport';

interface DataRequestsState {
    value: IDataImport[];
}

const initialState: DataRequestsState = {
    value: [],
};

const dataRequestsSlice = createSlice({
    name: 'dataRequests',
    initialState,
    reducers: {
        setDataRequests: (state, action: PayloadAction<IDataImport>) => {
            const findIndex = state.value.findIndex((data) => data.code === action.payload.code);
            if (findIndex === -1) {
                state.value = [...state.value, action.payload];
            } else {
                state.value[findIndex] = action.payload;
            }
        },
        updateDataRequestStatus: (
            state,
            action: PayloadAction<{ code: string; status: string }>,
        ) => {
            const { code, status } = action.payload;
            const index = state.value.findIndex((item) => item.code === code);
            if (index !== -1) {
                state.value[index] = { ...state.value[index], status: status };
            }
        },
    },
});

export const { setDataRequests, updateDataRequestStatus } = dataRequestsSlice.actions;
export default dataRequestsSlice.reducer;
