import React from 'react';
import moment from 'moment';
import { find } from 'lodash';
import { users } from '../../data';
import style from './notes.module.css';

const baseUrl = process.env.REACT_APP_AMAZON_BASE_URL;
const Note = ({ id, title, content, owner, likes, createdAt, updatedAt }) => {
	const user = find(users, (u) => u.id === owner);

	return (
		<div className={style._notes}>
			<div>
				<img src={`${baseUrl}${user.src}`} alt={user.name} />
			</div>
			<span>{user.name}</span>
			<h3>{title}</h3>
			<p>{content}</p>
			<span>
				{likes === 0 ? 'No one' : likes === 1 ? 'One person' : `${likes} people`}{' '}
				likes this
			</span>
			<span>{moment(createdAt).local('az').format('MMMM Do YYYY')}</span>
		</div>
	);
};

export { Note };
