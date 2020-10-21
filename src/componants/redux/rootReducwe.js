import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import helperReducer from './helperReducer';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  helpers: helperReducer,
});
