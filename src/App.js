import './App.css';
import { Provider } from 'react-redux';
import React from 'react';
//import logo from './logo.svg';
import store from './store';
import { TodoListStore } from './components/TodoList';
import { TodoFilterStore } from './components/TodoFilter';

function App() {
	return (
		<Provider store={store}>
			<TodoListStore />
			<TodoFilterStore />
		</Provider>
	);
}

export default App;
