import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_JSON_BASE,
});

export default instance;
export { routes } from './routes';
