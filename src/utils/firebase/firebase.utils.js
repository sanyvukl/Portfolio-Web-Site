import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAayK2P6IljlQVnMgd1RAygzpcfYiq4AdU",
  authDomain: "clothing-db-66a2c.firebaseapp.com",
  projectId: "clothing-db-66a2c",
  storageBucket: "clothing-db-66a2c.appspot.com",
  messagingSenderId: "148894067867",
  appId: "1:148894067867:web:509c0ac0757ff0f5f22a3e",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const google_provider = new GoogleAuthProvider();
google_provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, google_provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db,"users",userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log(`error creating the user ${error.message}`);
    };
  };

  return userDocRef;
};