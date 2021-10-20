import React, { useState } from 'react';

const Input = ({ add }) => {
	const [state, setState] = useState('');
	const onPressEnter = (e) => {
		if (state && e.key === 'Enter') {
			add(state);
			setState('');
		}
		return;
	};

	return (
		<>
			<label htmlFor='todo'>Add todo:</label>
			<input
				name='todo'
				id='todo'
				value={state}
				onChange={({ target }) => setState(target.value)}
				onKeyPress={onPressEnter}
			/>
		</>
	);
};

export default Input;
