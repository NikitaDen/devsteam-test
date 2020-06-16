import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import galleryReducer from './gallery-reducer';

const reducers = combineReducers({
  gallery: galleryReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

