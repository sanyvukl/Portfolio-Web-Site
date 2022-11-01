import React from "react";
import SingUpForm from "../../components/sign-up-form/sing-up-form.component";
import SingInForm from "../../components/sign-in-form/sing-in-form.component";
import "./authentication.style.scss";

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SingInForm />
            <SingUpForm />
        </div>
    );
}
export default Authentication;