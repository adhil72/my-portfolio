import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";


const fbConfig = {
    apiKey: "AIzaSyCct7h4llcpW-V8zkS-BsmzZBpoi9YjYLc",
    authDomain: "loyal-symbol-395803.firebaseapp.com",
    projectId: "loyal-symbol-395803",
    storageBucket: "loyal-symbol-395803.appspot.com",
    messagingSenderId: "420041017418",
    appId: "1:420041017418:web:100706d09b13422b123eb3",
    measurementId: "G-JLW55LB5DF"
};

const app = initializeApp(fbConfig);
const analytics = getAnalytics(app);