import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
});

// instance.interceptors.request.use((config) => {
// 	config.headers.Authorization = 'Bearer TOKEN';
// 	return config;
// });

instance.interceptors.response.use((responce) => {
	const url = responce?.config?.url;
	if (typeof url === 'string' && url.includes('users')) {
		let fullname = responce.data.name;
		responce.data.name = fullname.split(' ')[0];
		responce.data.surname = fullname.split(' ')[1];
		responce.data.username = responce.data.username.toLowerCase();
	}
	return responce;
});

export default instance;
