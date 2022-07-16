import { loading } from './userSlice';

export const getRelacionBases = () => {
	return async (dispatch, getState) => {

		dispatch(loading(true))

		// TODO: Realizar petición HTTP

		dispatch(loading(false))
		// setRelacionBases(response.data);

		// const response = await fetch('/api/relacion-bases');
		// const data = await response.json();
		// dispatch(setRelacionBases(data));
	}
}