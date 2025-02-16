import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storageReducer from './slices/filter/storageSlice';
import regionReducer from './slices/filter/regionSlice';
import dataReducer from './slices/data/dataSlice';
import dataRequestsReducer from './slices/data/dataRequests';
import activeModalReducer from './slices/activeModalSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
    storage: storageReducer,
    region: regionReducer,
    data: dataReducer,
    dataRequests: dataRequestsReducer,
    activeModal: activeModalReducer,
    auth: authReducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
