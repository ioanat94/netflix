import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'netflix-clone-49e41.firebaseapp.com',
  projectId: 'netflix-clone-49e41',
  storageBucket: 'netflix-clone-49e41.appspot.com',
  messagingSenderId: '963864561463',
  appId: '1:963864561463:web:3be883f5a8f66bd056fcb2',
  measurementId: 'G-VPQD5KHXDP',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
