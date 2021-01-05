import { UPDATE_FILTER } from './filterReducer';

// Action qui va être dispatcher
export const setFilterAction = value => ({
	type: UPDATE_FILTER,
	payload: value,
});
