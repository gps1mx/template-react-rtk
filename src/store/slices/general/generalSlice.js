import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	relacionBases: [],
};

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setRelacionBases: (state, action) => {
			state.relacionBases = action.payload;
		}


	},
});

// Action creators 
export const { setLoading, setRelacionBases } = generalSlice.actions;

export default generalSlice.reducer