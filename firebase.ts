import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import { getAuth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/compat/firestore'


const firebaseConfig = {
 
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

