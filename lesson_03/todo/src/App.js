import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './components/Input';
import Todo from './components/Todo';
import style from './App.module.css';

// { id: 1, content: 'sdsdsd', owner: '' }

function App() {
	const [input, setInput] = useState('');
	const [owner, setOwner] = useState(null);
	const createOwner = () => {
		const itsme = prompt('who are you?', 'nobody');
		setOwner(itsme);
	};
	useEffect(() => {
		createOwner();
	}, []);
	const [state, setState] = useState([]);
	const [editing, setEditing] = useState(null);
	function remove(id) {
		setState((prev) => prev.filter((x) => x.id !== id));
	}
	function add(content) {
		if (editing) {
			setState((prev) => {
				const e = prev.find((x) => x.id === editing.id);
				e.content = input;
				setEditing(null);
				return prev;
			});
		} else {
			setState((prev) => {
				return [...prev, { id: uuid(), content, owner, createDate: Date.now() }];
			});
		}
	}
	function update(id) {
		const editingValue = state.find((s) => s.id === id);
		setInput(editingValue.content);
		setEditing(editingValue);
	}

	return (
		<div className={style._root}>
			<Input {...{ add, input, setInput }} />
			{state.map((todo) => (
				<Todo {...todo} remove={remove} update={update} key={todo.id} />
			))}
		</div>
	);
}

export default App;
