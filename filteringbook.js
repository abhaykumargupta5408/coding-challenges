document.addEventListener("DOMContentLoaded", function() {
    var books = [
      { title: "Book 1", author: "author 1", year: 2005 },
      { title: "Book 2", author: "author 2", year: 2012 },
      { title: "Book 3", author: "author 3", year: 2018 },
      { title: "Book 4", author: "author 4", year: 2009 },
      { title: "Book 5", author: "author 5", year: 2015 }
    ];
  
    var filteredBooks = books.filter(function(book) {
      return book.year >= 2010;
    });
  
    var outputDiv = document.getElementById("output");
  
    filteredBooks.forEach(function(book) {
      var bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
  
      var titlePara = document.createElement("p");
      titlePara.classList.add("title");
      titlePara.textContent = book.title;
  
      var authorPara = document.createElement("p");
      authorPara.classList.add("author");
      authorPara.textContent = book.author;
  
      bookDiv.appendChild(titlePara);
      bookDiv.appendChild(authorPara);
  
      outputDiv.appendChild(bookDiv);
    });
  });
  