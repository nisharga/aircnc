import React from 'react';
import {CardElement, Elements } from '@stripe/react-stripe-js'; 
import {loadStripe} from '@stripe/stripe-js';

const Strip = () => {
    const stripePromise = loadStripe('pk_test_51IVGGKAEle2LeV8HWGu142zZca70ZzHZImW7iIVkkFmULppLdqFCsAKBDXAYtk9VrYItAbaqUNn2r4eaLWltpPeg00ZYbhP7wh');
    return (
        <div>  
        <Elements stripe={stripePromise}>

        <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
        </Elements> 
        </div>
    );
};

export default Strip;