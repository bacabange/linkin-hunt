import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { linksReducer, metadataReducer } from './linksReducer';
import { categoriesReducer } from './categoriesReducer';

export const Reducers = combineReducers({
	linksReducer,
	metadataReducer,
	authReducer,
	categoriesReducer,
});

export default Reducers;