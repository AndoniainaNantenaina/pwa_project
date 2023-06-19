import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
    apiKey: "AIzaSyBfGI4xgdBlBFyVBgMEjqGwTwIroBa6zrM",
    authDomain: "pwa-web-project.firebaseapp.com",
    projectId: "pwa-web-project",
    storageBucket: "pwa-web-project.appspot.com",
    messagingSenderId: "521613308610",
    appId: "1:521613308610:web:f3a17c7c41fa725845015b"
}

const app = initializeApp(config);
const auth = getAuth(app);

export { auth }
