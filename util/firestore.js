const firebase = require('firebase-admin');
const config = require('../config').default;

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert(config.firebase),
    databaseURL: 'https://my-project-1540496373257.firebaseio.com',
  });
}

export const db = firebase.firestore();
