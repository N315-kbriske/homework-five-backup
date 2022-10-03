var userInfo = {};

var bookList = [
  //   {
  //     bookTitle: "Todd Rocks",
  //     bookAuthor: "Todd",
  //     bookImage: "book1.jpg",
  //     price: "19.99",
  //   },
  //   {
  //     bookTitle: "Groot Rocks",
  //     bookAuthor: "Groot",
  //     bookImage: "book1.jpg",
  //     price: "19.99",
  //   },
  //   {
  //     bookTitle: "Mom & Dad Rock",
  //     bookAuthor: "Sister",
  //     bookImage: "book1.jpg",
  //     price: "19.99",
  //   },
];

var cart = [];

export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
      //   console.log("data " + data);
      // inject the data
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
      // loops through the json array at top
      //   $.each(bookList, (index, book) => {
      //     $(".row").append(`<div class="book">
      //     <div class="bookImage">
      //       <img src="images/${book.bookImage}" alt="" />
      //     </div>
      //     <div class="bookInfo">
      //       <h4>Book: ${book.bookTitle}</h4>
      //       <p>Author: ${book.bookAuthor}</p>
      //       <p>Price: $${book.price}</p>
      //       <button id="${index}">Buy</button>
      //     </div>
      //   </div>`);
      //   });

      //   $.each(bookList, function (index, book) {});

      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      // requires array and the iteratory
      //   $.each(cart, (index, cartItem) => {
      //     // console.log(bookList[cartItem]);
      //     let book = bookList[cartItem];
      //     $(".items").append(`<div class="book">
      //     <div class="bookImage">
      //       <img src="images/${book.bookImage}" alt="" />
      //     </div>
      //     <div class="bookInfo">
      //       <h4>Book: ${book.bookTitle}</h4>
      //       <p>Author: ${book.bookAuthor}</p>
      //       <p>Price: $${book.price}</p>
      //       <p>Quantity: 1</p>
      //     </div>
      //   </div>`);
      //   });
    });
  }
}

// // getters and setters
// export function setUserInfo(userObj) {
//   userInfo = userObj;
//   console.log(userInfo);
// }

// export function addToCart(bookIndex) {
//   cart.push(bookIndex);
//   $("#cartCount").html(cart.length.toString());
// }
