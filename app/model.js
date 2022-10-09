var userInfo = {};

var bookList = [
  {
    bookTitle: "Twilight",
    bookImage: "twilight-box-set.jpg",
    bookAvail: "In Stock",
    price: "99.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row1",
  },
  {
    bookTitle: "Harry Potter",
    bookImage: "hp-box-set.jpg",
    bookAvail: "In Stock",
    price: "100",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row1",
  },
  {
    bookTitle: "Game Of Thrones",
    bookImage: "got-box-set.jpg",
    bookAvail: "In Stock",
    price: "100",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row1",
  },
  {
    bookTitle: "Finding Me",
    bookImage: "finding me.jpg",
    bookAvail: "In Stock",
    price: "27.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row2",
  },
  {
    bookTitle: "MLK biography",
    bookImage: "mlk-biography.jpg",
    bookAvail: "In Stock",
    price: "19.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row2",
  },
  {
    bookTitle: "Elenor Roosevelt Biography",
    bookImage: "elenor-roosevelt-biography.jpg",
    bookAvail: "In Stock",
    price: "17.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row2",
  },
  {
    bookTitle: "Misery",
    bookImage: "misery.jpg",
    bookAvail: "In Stock",
    price: "19.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row3",
  },
  {
    bookTitle: "Frankenstein",
    bookImage: "frankenstein.jpg",
    bookAvail: "In Stock",
    price: "15.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row3",
  },
  {
    bookTitle: "Phantoms",
    bookImage: "phantoms.jpg",
    bookAvail: "In Stock",
    price: "19.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row3",
  },
  {
    bookTitle: "Winnie The Pooh",
    bookImage: "winnie the pooh.jpg",
    bookAvail: "In Stock",
    price: "19.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row4",
  },
  {
    bookTitle: "The Cat in The Hat",
    bookImage: "cat and the hat.jpg",
    bookAvail: "In Stock",
    price: "15.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row4",
  },
  {
    bookTitle: "Space",
    bookImage: "fun facts about space.jpg",
    bookAvail: "In Stock",
    price: "7.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
    rowId: "#row4",
  },
];
var homeBookList = [
  {
    bookTitle: "To Kill a Mockingbird",
    bookImage: "to-kill-a-mockingbird.jpg",
    bookAvail: "In Stock",
    price: "15.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
  },
  {
    bookTitle: "Becoming",
    bookImage: "becoming.jpg",
    bookAvail: "In Stock",
    price: "25.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
  },
  {
    bookTitle: "Firestarter",
    bookImage: "firestarter.jpg",
    bookAvail: "In Stock",
    price: "19.99",
    bookFlavor:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookQty: "",
  },
];

var cart = [];

export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
      //   console.log("data " + data);
      // inject the data
      $("#app").html(data);

      $.each(homeBookList, (index, book) => {
        $(".homeBooks").append(`
        
        <div class="panelContainer">
          <div class="bookDetailsContain">
            <div class="bookImage">
            <img src="../images/${book.bookImage}" alt="${book.bookTitle}" />
            </div>
      
            <div class="bookDescribe">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua." Urna nunc id cursus
              metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis
              vel eros.
            </div>
            <div class="bookPricing">$${book.price}</div>
            <button class="addBook">ADD TO CART</button>
        </div>
    `);
      });
      // $.each(homeBookList, function (index, book) {});

      // callback();
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
      // loops through the json array at top
      $.each(bookList, (index, book) => {
        $(book.rowId).append(`
  
    <div class="rowContainer">
      <div class="bookRow">
        <div class="bookImg">
          <img src="../images/${book.bookImage}" alt="${book.bookTitle}" />
        </div>

        <div class="itemContainer">
          <div class="bookDescription">${book.bookFlavor}</div>
          <div class="bookPrice">$${book.price}</div>
          <button class="addBook" id="${index}">ADD TO CART</button>
        </div>
      </div>
    </div>
   
    `);
      });

      // $.each(bookList, function (index, book) {});

      // callback();
    });
  } else if (pageID == "account") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
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
  console.log(cart.values());
}
