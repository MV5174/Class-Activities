// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
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

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highestPrice;
    highBidder = snapshot.val().highestBidder;

    
    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(snapshot.val().highestBidder);
    $("#highest-price").text(snapshot.val().highestPrice);

    // Print the data to the console.
    console.log(snapshot.val());

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(initialBidder);
    $("#highest-price").text(initialBid);

    // Print the data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  bidderPrice = $("#bidder-price").val();
  highBidder = $("#bidder-name").val();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");
    highPrice = bidderPrice;
    // Save the new price in Firebase
    database.ref().set({
      highestBidder: highBidder,
      highestPrice: highPrice
    })

    // Log the new High Price
    console.log(highPrice);

    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
