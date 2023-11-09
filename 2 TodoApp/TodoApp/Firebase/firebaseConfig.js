import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDV_wN_xgXguYJ0D5tJ8vhV8WnkPNDu6Y",
    authDomain: "ssip-todoapp.firebaseapp.com",
    projectId: "ssip-todoapp",
    storageBucket: "ssip-todoapp.appspot.com",
    messagingSenderId: "772484247121",
    appId: "1:772484247121:web:b946c0bc60646519fd1270",
    measurementId: "G-2TYSTGL6ZX"
  };

export const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(firebase);