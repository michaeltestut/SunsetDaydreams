import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { FIREBASE_KEY } from "./api-constants";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "sunset-daydreams.firebaseapp.com",
  projectId: "sunset-daydreams",
  storageBucket: "sunset-daydreams.appspot.com",
  messagingSenderId: "604676867184",
  appId: "1:604676867184:web:4fd57e2ee03ad55f6120b5",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
