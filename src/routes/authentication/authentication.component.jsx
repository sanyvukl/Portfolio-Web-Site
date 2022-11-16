import React, { Fragment } from "react";
import SingUpForm from "../../components/sign-up-form/sing-up-form.component";
import SingInForm from "../../components/sign-in-form/sing-in-form.component";
import { AuthenticationContainer } from "./authentication.style";

import { useSelector } from "react-redux";
import { selectUserIsLoading } from "../../store/user/user.selector";
import Spinner from "../../components/spinner/spinner.component";

const Authentication = () => {
    const isLoading = useSelector(selectUserIsLoading);
    return (
        <AuthenticationContainer>
            {isLoading ? <Spinner /> :
                <Fragment>
                    <SingInForm />
                    <SingUpForm />
                </Fragment>
            }
        </AuthenticationContainer>
    );
};
export default Authentication;