document.addEventListener("DOMContentLoaded", function() {
    var validateButton = document.getElementById("validate-button");
    validateButton.addEventListener("click", function() {
      var urlInput = document.getElementById("url-input");
      var url = urlInput.value;
  
      var urlPattern = /^(http:\/\/|https:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]$/;
  
      var isValid = urlPattern.test(url);
  
      var outputDiv = document.getElementById("output");
      outputDiv.textContent = isValid ? "URL is valid" : "URL is not valid";
    });
  });
  