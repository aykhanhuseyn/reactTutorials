import React from 'react';
import style from './todo.module.css';

const Todo = ({ id, content, owner, createDate, remove, update }) => {
	const date = new Date(createDate || null);
	return (
		<div className={style._root}>
			<h4 className={style._content}>
				<span>{content}</span>
				<span onClick={() => update(id)}>edit</span>
				<span onClick={() => remove(id)}>delete</span>
			</h4>
			<div className={style._ownerpart}>
				<span>{owner}</span>
				<span>{`${`${date.getDate()}`.padStart(2, '0')}-${
					date.getMonth() + 1
				}-${date.getFullYear()}`}</span>
			</div>
		</div>
	);
};

export default Todo;
