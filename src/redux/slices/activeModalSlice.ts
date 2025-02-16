import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IDataImport from '../../models/IDataImport';

interface ActiveModalState {
    value: IDataImport | null;
}

const initialState: ActiveModalState = {
    value: null,
};

const activeModalSlice = createSlice({
    name: 'activeModal',
    initialState,
    reducers: {
        setActiveModal(state, action: PayloadAction<IDataImport>) {
            state.value = action.payload;
        },
        clearActiveModal(state) {
            state.value = null;
        },
    },
});

export const { setActiveModal } = activeModalSlice.actions;
export const { clearActiveModal } = activeModalSlice.actions;
export default activeModalSlice.reducer;
