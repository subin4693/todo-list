import React from 'react';

const TodoList = ({ arrValue, setArrValue }) => {

	const handleDelete = (e) => {
		setArrValue(arrValue.filter((item) => {
			return item.id != e.target.id;
		}))
	}

	const handleSubmit = (e) => {
		setArrValue(arrValue.map((item) => {
				if(item.id != e.target.id) return item
			return{
				...item,
				isCompleted: !item.isCompleted,
			}
		}))
	}

	return <ul>
				{arrValue.map((item)=>{
					return <li key={ item.id } id={ item.id } className={ item.isCompleted?"completed":"" }>
						{ item.text }
						<button type="button" id={ item.id } onClick={ handleDelete }>
							delete
						</button>
						<button type="button" id={ item.id } onClick={ handleSubmit }>
							complete
						</button>

					</li>
				})}
		   </ul>
}

export default TodoList;