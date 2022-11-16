import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTONS_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";

import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";


const defaultFormValue = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormValue);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormValue);
  };
  function checkErrors(error) {
    switch (error.code) {
      case "auth/wrong-password":
        alert("Wrong Password");
        break;

      case "auth/user-not-found":
        alert("User is not found");
        break;

      default:
        alert("sorry try agian later");
        console.log(error);
        break;
    }


  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      checkErrors(error);
    }
  };
  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign In Page</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTONS_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>)
};

export default SingInForm;
