const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyBPKoBke1EQn1qjbGpuyDFipalreJnRQdE',
  authDomain: 'fama-a4e81.firebaseapp.com',
  databaseURL: 'https://fama-a4e81.firebaseio.com',
  projectId: 'fama-a4e81',
  storageBucket: 'fama-a4e81.appspot.com',
  messagingSenderId: '455010094097',
  appId: '1:455010094097:web:5e6ac06ef0d5ad7a6cb5b0',
  measurementId: 'G-EHY4JQ6FQL',
};

firebase.initializeApp(config);
const auth = firebase.auth();
const usersDb = firebase.firestore();

const addNewUser = (userDataObj) => {
  const { createdAt, firstName, lastName, email } = userDataObj;

  return usersDb.doc(`/users/${email}`).set({ createdAt, firstName, lastName });
};

const getUser = ({ email }) => {
  return usersDb
    .doc(`/users/${email}`)
    .get()
    .then((docSnapshot) => {
      return docSnapshot;
    });
};

const signUp = ({ email, password1 }) => {
  return auth
    .createUserWithEmailAndPassword(email, password1)
    .then((userCredentials) => {
      return userCredentials.user.getIdToken();
    })
    .then((userToken) => {
      return { userToken };
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { signUp, getUser, addNewUser };
