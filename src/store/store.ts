import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import quizReducer from './reducers/quizReducer';

const rootReducer = combineReducers({
    quiz: quizReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;