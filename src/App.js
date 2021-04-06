import logo from './logo.svg';
import './App.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="logo" /> Google Pay React </h1>
      <hr />
      <GooglePayButton
      paymentRequest={
        {
          apiVersion:2,
          apiVersionMinor:0,
          allowedPaymentMethods:[
            {
              type :'CARD',
              parameters:{
                allowedAuthMethods : ['PAN_ONLY', 'CRYPTOGRAM_3DS' ],
                allowedCardNetworks : ['MASTERCARD','VISA'],
                billingAddressRequired:true,
              },
              tokenizationSpecification:{
                type:'PAYMENT_GATEWAY',
                parameters:{
                  gateway:'stripe'
                },
              },
            },
          ],
          merchantInfo:{
            merchantId : '12313example',
            merchantName:'Azhar'
          },
          transactionInfo:{
            totalPriceStatus:'FINAL',
            totalPriceLabel:'total',
            totalPrice:'100.00',
            currencyCode:'USD',
            countryCode:'US',
          },
          shippingAddressRequired:true,
          callbackIntents:['PAYMENT_AUTHORIZATION'],
        }}
      onLoadPaymentData={PaymentRequest=>{
        console.log('successfull',PaymentRequest);
      }}
      onPaymentAuthorized={PaymentResponse=>{
        console.log('payment response',PaymentResponse);
      }}
      />
    </div>
    
  );
}

export default App;
