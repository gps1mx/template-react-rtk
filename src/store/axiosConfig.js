import axios from 'axios';

export const axiosConfig = axios.create({
	baseURL: 'http://sigiddbb.peacsa.com:3000',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`,
	}
});
