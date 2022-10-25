import React from 'react';

const InputField = ({ setValue, value, arrValue, setArrValue }) => {
	const handleSubmit = (e) =>{
		e.preventDefault();
		if(value.trim().length === 0) return;
		setArrValue([...arrValue,{ text: value.trim(),
								  id: Math.floor(Math.random()*1000000),
								  isCompleted: false
								}]);
		setValue("");
	}
	const handleChange = (e) => {
		setValue(e.target.value);
	}
	return (<>
				<form onSubmit={ handleSubmit }>
					<input type="text" onChange={ handleChange } value={ value } />
					<button type="submit">
						send
					</button>
				</form>
		   </>);
}

export default InputField;