import * as admin from 'firebase-admin';
import 'firebase/firestore';

const serviceAccount = require('./key.json');
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://react-firebase-bookmarks.firebaseio.com"
});

const db = app.firestore();

/*
* Generate Timestamps
*/
const generateTimestampsDuringCreate = () => {
  return {
    _createdAt: Date.now(),
    _updatedAt: null,
    _deletedAt: null
  }
}

/*
* Generate Integer between min and max
*/
const generateValueBetweenMinAndMax = (min, max) => {
  return min + Math.round(Math.random()*(max - min));
}

export {
    admin,
    app,
    db,
    generateTimestampsDuringCreate,
    generateValueBetweenMinAndMax
}