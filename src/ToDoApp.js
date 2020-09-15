import React from 'react'
import toDoArray from './toDoArray'
import Item from './components/Item'

function ToDoApp() {
	const toDoComponent = toDoArray.map(item =>
		<Item 
			key={item.id}
			item={item}/>
	)
	return (
		<div className="todo-list">
			{toDoComponent}
		</div>
	)
}

export default ToDoApp