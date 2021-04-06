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
      environment='TEST'
      paymentRequest={{
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
                  gateway:'example',
                  gatewayMerchantId:'ExampleAzharGateway',
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
            totalPrice:'1.00',
            currencyCode:'USD',
            countryCode:'US',
          },
          shippingAddressRequired:true,
          callbackIntents:['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest=>{
          console.log('success',paymentRequest);
        }}
        onPaymentAuthorized={paymentRequest=>{
          console.log('pay req',paymentRequest);
          return {transactionState:'SUCCESS'}
        }}

      existingPaymentMethodRequired='false'
      buttonColor='black'
      buttonType='buy'
      />
    </div>
    
  );
}

export default App;