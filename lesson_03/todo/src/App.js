import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './components/Input';
import Todo from './components/Todo';
import style from './App.module.css';

// { id: 1, content: 'sdsdsd', owner: '' }

function App() {
	const [owner, setOwner] = useState(null);
	const [state, setState] = useState([]);
	const createOwner = () => {
		const itsme = prompt('who are you?', 'nobody');
		setOwner(itsme);
	};
	function remove(id) {
		setState((prev) => prev.filter((x) => x.id !== id));
	}
	function add(content) {
		setState((prev) => {
			return [...prev, { id: uuid(), content, owner, createDate: Date.now() }];
		});
	}
	useEffect(() => {
		createOwner();
	}, []);
	return (
		<div className={style._root}>
			<Input add={add} />
			{state.map((todo) => (
				<Todo {...todo} remove={remove} key={todo.id} />
			))}
		</div>
	);
}

export default App;
