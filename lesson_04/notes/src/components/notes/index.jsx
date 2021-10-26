import React from 'react';
import { map } from 'lodash';
import { v4 as uuid } from 'uuid';
import { Note } from './singleNote';
import { data } from '../../data';
import style from './notes.module.scss';

const NotesList = () => {
	return (
		<div className={style._list}>
			{map(data, (note) => (
				<Note {...note} key={uuid()} />
			))}
		</div>
	);
};

export { NotesList };
