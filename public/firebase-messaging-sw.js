importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: "267452287956",
})

const initMessaging = firebase.messaging();