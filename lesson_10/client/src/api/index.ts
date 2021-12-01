import axios from 'axios';
import { baseURL } from '../config';

const BearerToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const instance = axios.create({
	baseURL,
	headers: {
		Authorization: `Bearer ${BearerToken}`,
		// 'x-access-token': '',
	},
});

export default instance;
