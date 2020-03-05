import * as admin from 'firebase-admin';
import 'firebase/firestore';

const serviceAccount = require('./key.json');
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://react-firebase-bookmarks.firebaseio.com"
});

const db = app.firestore();

export {
    admin,
    app,
    db,
}