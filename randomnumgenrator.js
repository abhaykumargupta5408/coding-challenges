// Function to generate a random number
function generateRandomNumber() {
    var delay = 3; // Delay in seconds
    var remainingTime = delay;
  
    var progressMessage = document.getElementById("progressMessage");
    var randomNumberElement = document.getElementById("randomNumber");
    progressMessage.innerText = "Generating random number in " + remainingTime + " seconds...";
  
    var countdownInterval = setInterval(function() {
      remainingTime--;
      if (remainingTime > 0) {
        progressMessage.innerText = "Generating random number in " + remainingTime + " seconds...";
      } else {
        clearInterval(countdownInterval);
        var randomNum = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
        progressMessage.innerText = "Random number generated!";
        randomNumberElement.innerText = "Random Number: " + randomNum;
      }
    }, 1000); // Update every second
  }
  