  var firebaseConfig = {
    apiKey: "AIzaSyAqxnZHJP1WUm15PklNPpb5xqqIcbeRKy0",
    authDomain: "vctech-c0a31.firebaseapp.com",
    databaseURL: "https://vctech-c0a31.firebaseio.com",
    projectId: "vctech-c0a31",
    storageBucket: "vctech-c0a31.appspot.com",
    messagingSenderId: "522739906498",
    appId: "1:522739906498:web:4d7bc21b3abd29c918085b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var messagesRef = firebase.database().ref('messages');



// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  var nomeInput = document.getElementById('nome').value;
  var emailInput = document.getElementById('email').value;

  // Save message
  saveMessage(nomeInput, emailInput);

}

//Salvar dados no banco
function saveMessage(nomeInput, emailInput) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nomeInput: nomeInput,
    emailInput: emailInput
  });
}
