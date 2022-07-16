import { axiosConfig } from '../../axiosConfig'
import { setLoading, setRelacionBases } from './generalSlice';

export const getRelacionBases = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		const { data } = await axiosConfig.get('/relacion_bases/activas');
		console.log(data)
		dispatch(setRelacionBases(data));
		dispatch(setLoading(false))
	}
}