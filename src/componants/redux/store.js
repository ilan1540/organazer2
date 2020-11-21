// start config firestore
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';

import rootReducer from './rootReducwe';

const firebaseConfig = {
  apiKey: 'AIzaSyDYdE3Kc5syb6IixVDxIpw47P1deduNh_c',
  authDomain: 'organizer-a93c9.firebaseapp.com',
  databaseURL: 'https://organizer-a93c9.firebaseio.com',
  projectId: 'organizer-a93c9',
  storageBucket: 'organizer-a93c9.appspot.com',
  messagingSenderId: '551461871331',
  appId: '1:551461871331:web:51e414677e9902a2376fd6',
  measurementId: 'G-5S30EGSNND',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
export const storage = firebase.storage()
// Add firebase to reducers

// צריך כדי לקלוט נתונים מ web api
const middleware = [thunk];

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
