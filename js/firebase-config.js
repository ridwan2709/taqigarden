// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyA51F2pPZUWmdOaYqsihD78LTrvnXDqXn4",
        authDomain: "taqi-4a756.firebaseapp.com",
        projectId: "taqi-4a756",
        storageBucket: "taqi-4a756.firebasestorage.app",
        messagingSenderId: "836265831490",
        appId: "1:836265831490:web:38277600db742f145451db"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = storage.ref();
