import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDzcmVGfpRIkOw6o-heOfEUXG3yAnxrMPs",
    authDomain: "recipeboxreact.firebaseapp.com",
    projectId: "recipeboxreact",
    storageBucket: "recipeboxreact.appspot.com",
    messagingSenderId: "219073248216",
    appId: "1:219073248216:web:d7175508baed8657b250ad",
    measurementId: "G-WW1GMT984K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    firebase.database().ref().set({
//     users: {
//         alovelace: {
//           name: "Ada Lovelace",
//           contacts: { "ghopper": true },
//         }
        
//       }

});

  
   
  
  export const database = firebase.database();
  export const auth = firebase.auth();