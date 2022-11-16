import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTONS_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";

const PaymentForm = () => {
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const stripe = useStripe();
    const elements = useElements();

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) { return; };
        setIsProcessingPayment(true);
        const responce =
            await fetch('/.netlify/functions/create-payment-intent', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }).then((res) => res.json());
        console.log(responce);

        const { paymentIntent: { client_secret } } = responce;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "guest",
                }
            }
        });

        if (paymentResult.error) {
            setIsProcessingPayment(false);
            alert("Error ", paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                setIsProcessingPayment(false);
                alert("Payment Successful");
            };
        };
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTONS_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};
export default PaymentForm;