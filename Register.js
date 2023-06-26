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

    

    //----- New Registration code start	  
    document.getElementById("register-btn").addEventListener("click", function() {
        var email =  document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var cpassword = document.getElementById("passwordConfirm").value;
        
    

    if (email === "") {
        alert("Email input is empty!");
        return;
    }

    if (password === "") {
      alert("Password input is empty!");
        return;
    }

    if (cpassword === "") {
      alert("Confirm Password input is empty!");
        return;
    }

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
  }
    
      //For new registration
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert("Registration successfully!!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
          alert(error);
        });  
    });

    
