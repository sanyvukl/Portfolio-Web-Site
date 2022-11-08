import React from "react";
import SingUpForm from "../../components/sign-up-form/sing-up-form.component";
import SingInForm from "../../components/sign-in-form/sing-in-form.component";
import {AuthenticationContainer} from "./authentication.style";

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SingInForm />
            <SingUpForm />
        </AuthenticationContainer>
    );
}
export default Authentication;