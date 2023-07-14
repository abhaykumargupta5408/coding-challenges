document.addEventListener("DOMContentLoaded", function() {
  var inventory = {
    item1: { name: "Item 1", priceUSD: 10 },  // Price in USD
    item2: { name: "Item 2", priceUSD: 20 },
    item3: { name: "Item 3", priceUSD: 15 },
    item4: { name: "Item 4", priceUSD: 25 }
  };

  var exchangeRate = 80;

  var exchangeInput = document.getElementById("exchange-input");
  exchangeInput.value = exchangeRate;
  exchangeInput.addEventListener("input", function() {
    exchangeRate = parseFloat(exchangeInput.value);
    updateOutput();
  });

  var outputDiv = document.getElementById("output");

  function updateOutput() {
    outputDiv.innerHTML = "";

    Object.entries(inventory).forEach(function([itemName, item]) {
      var itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      var nameSpan = document.createElement("span");
      nameSpan.classList.add("name");
      nameSpan.textContent = item.name;

      var priceUSDSpan = document.createElement("span");
      priceUSDSpan.classList.add("price");
      priceUSDSpan.textContent = item.priceUSD + " USD";

      var priceINR = item.priceUSD * exchangeRate;
      var priceINRSpan = document.createElement("span");
      priceINRSpan.classList.add("price");
      priceINRSpan.textContent = priceINR + " INR";

      itemDiv.appendChild(nameSpan);
      itemDiv.appendChild(priceUSDSpan);
      itemDiv.appendChild(priceINRSpan);

      outputDiv.appendChild(itemDiv);
    });
  }

  updateOutput();
});
