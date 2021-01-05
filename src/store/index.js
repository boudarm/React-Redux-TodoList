import { combineReducers, createStore } from 'redux';
import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';

const store = createStore(
	combineReducers({
		todos: todosReducer,
		filter: filterReducer,
	}),

	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
