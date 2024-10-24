import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5KnykjNEJzcq06fAbngQQooWEAdkgK8I',
  authDomain: 'mandatory-mapp.firebaseapp.com',
  projectId: 'mandatory-mapp',
  storageBucket: 'mandatory-mapp.appspot.com',
  messagingSenderId: '400134777827',
  appId: '1:400134777827:web:2ae30d812b406596690ed6',
  measurementId: 'G-HJW8K7DN07',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
