import React from 'react';

const Input = ({ add, input, setInput }) => {
	const onPressEnter = (e) => {
		if (input && e.key === 'Enter') {
			add(input);
			setInput('');
		}
		return;
	};

	return (
		<>
			<label htmlFor='todo'>Add todo:</label>
			<input
				name='todo'
				id='todo'
				value={input}
				onChange={({ target }) => setInput(target.value)}
				onKeyPress={onPressEnter}
			/>
		</>
	);
};

export default Input;
