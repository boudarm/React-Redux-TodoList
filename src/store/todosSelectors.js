// Fichier qui exporte des fonctions
// Selector qui va récupérer les données depuis un store
// Prend en paramètre l'etat et retourne l'etat

import { createSelector } from 'reselect';
import { filterSelector } from './filterSelectors';

// Fonction
export const todosSelector = ({ todos }) => todos;

/*export const filteredTodosSelector = ({ todos, filter }) => {
	if (filter === null) {
		return todos;
	}
	return todos.filter(todo => todo.completed === filter);
};*/

// on va le déclarer dé=ifféremment : va créer une version mémorisée de notre selector
// la fonction ne sera rappelée que si l'une des valeurs a changé : todosSelector filterSelector,
export const filteredTodosSelector = createSelector(
	todosSelector,
	filterSelector,
	(todos, filter) => {
		if (filter === null) {
			return todos;
		}
		return todos.filter(todo => todo.completed === filter);
	},
);
