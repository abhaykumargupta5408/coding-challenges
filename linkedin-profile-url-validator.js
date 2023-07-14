document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate-button");
    validateButton.addEventListener("click", function() {
      var urlInput = document.getElementById("url-input");
      var url = urlInput.value;
  
      var urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]/;
  
      var isValid = urlPattern.test(url);
  
      var outputDiv = document.getElementById("output");
      outputDiv.textContent = isValid ? "Valid LinkedIn profile URL" : "Invalid LinkedIn profile URL";
    });
  });
  