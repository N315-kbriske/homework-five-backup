import * as MODEL from "./model.js";
// import * as MODEL from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log(hashTag + " " + pageID);
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, buyNow);
  } else if (pageID == "account") {
    MODEL.changePage(pageID, initSubmitListener);
  } else {
    MODEL.changePage(pageID);
  }

  //   // move this to model.js inside an export function that takes in pageID
  //   if (pageID != "") {
  //     $.get(`pages/${pageID}/${pageID}.html`, function (data) {
  //       console.log("data " + data);
  //       $("#app").html(data);
  //     });
  //   } else {
  //     $.get(`pages/home/home.html`, function (data) {
  //       console.log("data " + data);
  //       $("#app").html(data);
  //     });
  //   }
}
function placeholder() {}

function logIn() {
  $(".login").on("click", function (e) {
    console.log("submit");

    let email = $(".email").val();
    let password = $(".password").val();

    $(".email").val("");
    $(".password").val("");
  });
}

function initSubmitListener() {
  $(".submit").on("click", function (e) {
    console.log("submit");
    //   trace("app.js", "submit");

    let fn = $(".fName").val();
    let ln = $(".lName").val();
    let email = $(".email").val();
    let password = $(".password").val();

    // make the user object
    if (fn == "") {
      alert("enter data");
    } else if (ln == "") {
      alert("enter data");
    } else if (email == "") {
      alert("enter data");
    } else if (password == "") {
      alert("enter data");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: email,
        password: password,
      };

      // send that object
      MODEL.setUserInfo(userObj);

      $(".fName").val("");
      $(".lName").val("");
      $(".email").val("");
      $(".password").val("");
    }
    console.log(`${fn} ${ln} ${email} ${password}`);
  });
}

function trace(fileName, log) {
  console.log(fileName + " " + log);
}

function buyNow() {
  $(".itemContainer button").on("click", (e) => {
    let bookID = e.currentTarget.id;
    MODEL.addToCart(bookID);
    console.log(bookID);
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initSubmitListener();
  initURLListener();
});
