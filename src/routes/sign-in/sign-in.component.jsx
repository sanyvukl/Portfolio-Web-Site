import React, {useEffect} from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sign-up-form/sing-up-form.component";

const SignIn = () =>{  
    const logWithGoogleUserPopup = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 
    return(
        <div>
            <div>
                <h1>Sign In Page</h1>
            </div>
            <button onClick={logWithGoogleUserPopup}>
                Sign in with Google Popup
            </button>
            <SingUpForm />
        </div>
    );
}
export default SignIn;