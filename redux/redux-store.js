import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import mainReducer from './main-reducer';

const reducers = combineReducers({
  photos: mainReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

