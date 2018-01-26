// import {combineReducers,applyMiddleware} from 'redux';
// // import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import authReducer from '../store/reducers/reducer';
// import logger from 'redux-logger';
// import authReducer from './reducers/reducer';

// export default createStore(
//     combineReducers({
//             user :authReducer
//     }),
//     applyMiddleware(logger())
// )
// // export default store;

import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;