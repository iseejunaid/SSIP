import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxx",
  measurementId: "xxxx",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(firebase);
