var direct = require('direct-sdk-client-js/dist/directsdk.noEncrypt');

var sessionDetails = {
    assetUrl: "",
    clientApiUrl: "",
    clientSessionId: "",
    customerId: ""
};

var paymentDetails = {
    totalAmount: 10000,
    countryCode: "NL",
    locale: "nl_NL",
    currency: "EUR",
    isRecurring: false
};

var cardNumber = '4567 3500 0042 7977';

var session = new direct(sessionDetails);

createPayload(session, cardNumber, paymentDetails);

// enable hot module replacement
if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept();
}