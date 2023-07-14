// Function to reverse a string
function reverseString(input) {
    var reversed = '';
    for (var i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    return reversed;
  }
  
  // Function to reverse the input after a delay of 2 seconds
  function reverseAfterDelay() {
    var input = document.getElementById("inputString").value;
  
    setTimeout(function() {
      var reversedString = reverseString(input);
      document.getElementById("outputString").innerText = reversedString;
    }, 2000);
  }
  