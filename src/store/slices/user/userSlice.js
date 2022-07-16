import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	nombre: '',
	rfc: '',
	base: '',

};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.nombre = action.payload.nombre;
			state.rfc = action.payload.rfc;
			state.base = action.payload.base;
		}
	},
});

// Action creators 
export const { loading } = userSlice.actions;

export default userSlice.reducer