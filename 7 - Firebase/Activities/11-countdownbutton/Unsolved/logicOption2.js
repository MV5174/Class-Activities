// Initialize Firebase (YOUR OWN APP)

var firebaseConfig = {
  apiKey: "AIzaSyAOn2cm3l005arGIY2DBX6Ccirw-5o6lHI",
  authDomain: "test-project-e55be.firebaseapp.com",
  databaseURL: "https://test-project-e55be.firebaseio.com",
  projectId: "test-project-e55be",
  storageBucket: "",
  messagingSenderId: "31934415382",
  appId: "1:31934415382:web:f538ec8ed7abe5d2"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){
  // Print the initial data to the console.
  console.log(snapshot.val());
  // Change the html to reflect the initial value.
  $("#data-value").text(initialValue);








// Change the clickCounter to match the data in the database
clickCounter = snapshot.val().clickCount;

// Log the value of the clickCounter
console.log(clickCounter);

// Change the HTML Value
$("#data-value").text(clickCounter);

// If any errors are experienced, log them to console.

// --------------------------------------------------------------
})
// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
if (clickCounter === 0){
  alert("You did it!");
  clickCounter = initialValue;
}

  // Save new value to Firebase
database.ref().set

  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
