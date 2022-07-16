import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import generalSlice from './slices/general/generalSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		general: generalSlice,
	},
});