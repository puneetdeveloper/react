import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../reducers/UserReducer';
import {isUndefined} from '../components/_utility/utility';


// const middleware = applyMiddleware(promise(), thunk, logger());
const middleware = applyMiddleware(promise(), thunk);

let initialize = {
    answers : {},
};

let store = createStore(reducer, initialize, middleware);
store.subscribe(() => {
    saveState({
        answers: store.getState().answers
    });
});

export default store;
