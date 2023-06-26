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

    document.getElementById("login-btn").addEventListener("click", function() {
        var email =  document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert(user.email+" Login successfully!!!");
          document.getElementById('logout').style.display = 'block';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });		  		  
    });