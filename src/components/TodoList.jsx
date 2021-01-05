import {connect, useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import { filteredTodosSelector, todosSelector } from '../store/todosSelectors';
import { deleteTodoAction, toggleTodoAction } from '../store/todosActions';

// Composant TodoItem
function TodoItem({todo, onToggle, onDelete}) {
  return <li>
    <label htmlFor="">
     <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}/> 
     {todo.title}
     <button type="checkbox"  onClick={() => onDelete(todo)}>x</button>
    </label>
  </li>
}

// Composant à décorer : TodoList
export function TodoList({todos, onToggle, onDelete}) {
  return <ul>
    {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}
  </ul>
}

 // début utilisation du hook
export function TodoListStore() {
 
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();

  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, [])

  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo));
  }, [])
  
 return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}
// Fin utilisation du hook

/* Le premier paramètre est une fonction qui prend l'état de mon store
 et ça retournera un objet avec les différentes chose que je vais envoyer en props

 la fonction connect va renvoyer une fonction à laquelle il faudra passer le composant /à décorer

 Maintenant quand je vais utliser le composant TodosListeStore : il va epuiser les 
 todos dans le store et les passer au composant TodoList
*/

/*export const TodoListStore = connect(
 (state) => ({
  todos: filteredTodosSelector(state)
 }),*/


 // 2 ème paramère de la fonction connect
// Fonction qui va mapper des dispatch au niveau des props
// cette fonction prend en paramètre un dispatch et retourne un objet qui pourra utiliser	// le dispatch
// L'objet aura comme propriété onToggle : ca sera une fonction qui prend en paramèter 
// la todo et qui fera un dispatch. On lui passera un objet avec un type 
// UPDATE_TODO_ACTION / DELETE_TODO_ACTION
// et un payload ça sera la todo auquel on ajoutera completed

	/*(dispatch) => ({
  onToggle: todo => dispatch(toggleTodoAction(todo)),
  onDelete: todo => dispatch(deleteTodoAction(todo))
	})
)(TodoList)*/