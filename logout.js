    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  const firebaseConfig = {
      apiKey: "AIzaSyA0A1SzD14t4vuBOIwNLwcfCpBfTglMY_c",
      authDomain: "website-1a206.firebaseapp.com",
      projectId: "website-1a206",
      storageBucket: "website-1a206.appspot.com",
      messagingSenderId: "506659684787",
      appId: "1:506659684787:web:7775587bad34ca3f210bc6",
      measurementId: "G-FM95RDPW4M"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    console.log(app);

    document.getElementById("logout").addEventListener("click", function() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
          }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
          });		  		  
    });