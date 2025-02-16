import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
    isAuth: boolean;
    role: string;
}

const initialState: AuthSlice = {
    isAuth: false,
    role: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ role: string }>) {
            state.isAuth = true;
            state.role = action.payload.role;
        },
        logout(state) {
            state.isAuth = false;
            state.role = '';
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;