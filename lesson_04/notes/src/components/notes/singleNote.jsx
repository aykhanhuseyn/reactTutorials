import React from 'react';
import moment from 'moment';
import { find } from 'lodash';
import { users } from '../../data';
import style from './notes.module.scss';

const baseUrl = process.env.REACT_APP_AMAZON_BASE_URL;
const Note = ({ id, title, content, owner, likes, createdAt, updatedAt }) => {
	const user = find(users, (u) => u.id === owner);
	const likesCount = likes.length;

	return (
		<div className={style._note}>
			<div className={style._avatar}>
				<img src={`${baseUrl}${user.src}`} alt={user.name} />
			</div>
			<span className={style._owner}>{user.name}</span>
			<h3 className={style._title}>{title}</h3>
			<p className={style._content}>{content}</p>
			<span className={style._likes}>
				{likesCount === 0
					? 'No one'
					: likesCount === 1
					? 'One person'
					: `${likesCount} people`}{' '}
				likes this
			</span>
			<span className={style._created}>
				{moment(createdAt).format('Do MMMM YYYY')}
			</span>
		</div>
	);
};

export { Note };
