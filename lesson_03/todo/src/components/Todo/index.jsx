import React from 'react';
import style from './todo.module.css';

const Todo = ({ id, content, owner, remove, createDate }) => {
	const date = new Date(createDate || null);
	return (
		<div className={style._root} onClick={() => remove(id)}>
			<h4 className={style._content}>{content}</h4>
			<div className={style._ownerpart}>
				<span>{owner}</span>
				<span>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
			</div>
		</div>
	);
};

export default Todo;
