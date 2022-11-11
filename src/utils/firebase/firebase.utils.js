import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { 
  getFirestore,
  doc, 
  getDoc, 
  setDoc, 
  collection,
  writeBatch,
  query,
  getDocs,
}from "firebase/firestore";

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

export const auth = getAuth();

const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd, field = 'title') => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });
  
  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(docSnapshot=>docSnapshot.data());
  // const categoryMap = 
    // .reduce((acc, docSnapshot)=>{
    // const {title, items} = docSnapshot.data();
    // acc[title.toLowerCase()] = items;
    // return acc;
  // }, {});

  // return categoryMap;
};
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
  if(!userAuth)return;

  const userDocRef = doc(db,"users",userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }catch(error){
      console.log(`error creating the user ${error.message}`);
    };
  };

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async(email,password)=> {
  if(!email || !password)return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPassword = async(email, password) =>{
  if(!email || !password)return;

  return await signInWithEmailAndPassword(auth,email,password);
};
export const signOutUser = async() => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


// Google Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
