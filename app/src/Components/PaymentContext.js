
import React, { createContext } from 'react';
import axios from 'axios';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {

    const Razorpayfn = async (price) => {
        const { data } = await axios.post('https://e-commerce-backend-m4zm.onrender.com/order', { amount: price });
console.log("jai ho");
        const options = {
            key: "rzp_test_CGjThgj9XQHnOk",
            amount: data.amount,
            currency: data.currency,
            name: "My Shop",
            description: "Test Transaction",
            order_id: data.id,
            handler: async function (response) {
                const verifyRes = await axios.post('https://e-commerce-backend-m4zm.onrender.com/verify', {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                });
                alert(verifyRes.data.msg);
            },
            prefill: {
                name: "Arpit Pandey",
                email: "arpit@example.com",
                contact: "9559983740"
            },
            theme: { color: "rgb(241, 255, 255)" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <PaymentContext.Provider value={Razorpayfn}>
            {children}
        </PaymentContext.Provider>
    );
};
