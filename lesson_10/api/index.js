const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	console.log(req.body);
	res.send('hello');
});

app.post('/login', (req, res) => {
	console.log('post', req.body);
	if (req.body.username === 'johndoe' && req.body.password === '12345') {
		return res.status(200).send('logged in');
	}
	return res.status(400).send('false');
});

app.listen(3001, () => {
	console.log('listening on port 3001');
});
