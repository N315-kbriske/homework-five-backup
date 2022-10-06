var userInfo = {};

var bookList = [
  {
    bookTitle: "To Kill A Mockingbird",
    bookImage: "book1.jpg",
    bookAvail: "In Stock",
    price: "15.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
  },
  // {
  //   bookTitle: "Groot Rocks",
  //   bookImage: "book1.jpg",
  //   bookAvail: "In Stock",
  //   price: "19.99",
  //   bookQty: "",
  // },
  // {
  //   bookTitle: "Mom & Dad Rock",
  //   bookImage: "book1.jpg",
  //   bookAvail: "In Stock",
  //   price: "19.99",
  //   bookQty: "",
  // },
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
      $.each(bookList, (index, book) => {
        $(".row").append(`<div class="booksContent">
  <div class="bookRowTitle">BOOKSETS</div>
  <div class="rowContainer">
    <div class="bookRow">
      <div class="bookImg">
        <img src="../images/${book.bookImage}" alt="" />
      </div>
      <div class="itemContainer">
        <div class="bookDescription">${book.bookFlavor}</div>
        <div class="bookPrice">$${book.price}</div>
        <button class="addBook" id="${index}">ADD TO CART</button>
      </div>
    </div>`);
      });

      $.each(bookList, function (index, book) {});

      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      // requires array and the iteratory
      $.each(cart, (index, cartItem) => {
        // console.log(bookList[cartItem]);
        let book = bookList[cartItem];
        $(".items").append(`<div class="cartPage">
  <div class="cartItemContainer">
    <div class="cartItemImage">
      <img src="../images/${book.bookImage}" alt="" />
    </div>
    <div class="itemContent">
      <div class="itemTitle">${book.bookTitle}</div>
      <div class="itemPrice">$${book.price}</div>
      <div class="itemStock">$${book.bookAvail}</div>
      <div class="qtyContain">
        <div class="qty">Qty: 1</div>
        <button class="changeQty">change</button>
        <div>|</div>
        <button class="delete">delete</button>
      </div>
    </div>
  </div>`);
      });
    });
  }
}

// getters and setters
export function setUserInfo(userObj) {
  userInfo = userObj;
  console.log(userInfo);
}

export function addToCart(bookIndex) {
  cart.push(bookIndex);
  $("#cartCount").html(cart.length.toString());
}
