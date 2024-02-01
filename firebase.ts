import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import { getAuth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC1Z5_g3CffnFOeTrUHAN_L6Vg6v-4QJJ4",
  authDomain: "counselor-54598.firebaseapp.com",
  projectId: "counselor-54598",
  storageBucket: "counselor-54598.appspot.com",
  messagingSenderId: "329559746567",
  appId: "1:329559746567:web:2810209acf9ee001a3a2a2"
};

// Initialize Firebase

export let FIREBASE_APP: FirebaseApp, FIREBASE_AUTH: Auth, FIREBASE_DB: Firestore

if (!getApps().length) {
  try {
    FIREBASE_APP = initializeApp(firebaseConfig);
    FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    FIREBASE_DB = getFirestore(FIREBASE_APP);
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  FIREBASE_APP = getApp();
  FIREBASE_AUTH = getAuth(FIREBASE_APP);
  FIREBASE_DB = getFirestore(FIREBASE_APP);
}

