import React, { useState, useEffect } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App = () => {
	const [ value, setValue ] = useState("");
	const [ arrValue, setArrValue ] = useState([]);

	useEffect(() => {
		if(localStorage.getItem("items") == null) return;
		setArrValue(JSON.parse(localStorage.getItem("items")));
	},[])

	useEffect(() => {
		localStorage.setItem("items",JSON.stringify(arrValue))
	},[arrValue])

	return(
			<> 
				<InputField setValue={ setValue }
							value={ value } 
							arrValue={ arrValue } 
							setArrValue={ setArrValue }
				/>
				<TodoList arrValue={ arrValue } setArrValue={ setArrValue }/>
			</>
		);
}

export default App;