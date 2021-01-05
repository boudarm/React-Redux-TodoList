import { DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from './todosReducer';

// Action qui va être dispatcher
export const toggleTodoAction = todo => ({
	type: UPDATE_TODO_ACTION,
	payload: { ...todo, completed: !todo.completed },
});

// Action delete
export const deleteTodoAction = todo => ({
	type: DELETE_TODO_ACTION,
	payload: todo.id,
});
