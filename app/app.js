import * as MODEL from "./model.js";
// import * as MODEL from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log(hashTag + " " + pageID);
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, placeholder);
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

function initSubmitListener() {
  $("#submit").click(() => {
    // console.log("submit");
    trace("app.js", "submit");

    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let email = $("#email").val();
    let pw = $("#pw").val();

    // make the user object
    if (fn == "") {
      alert("enter data");
    } else if (ln == "") {
      alert("enter data");
    } else if (email == "") {
      alert("enter data");
    } else if (pw == "") {
      alert("enter data");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: email,
        password: pw,
      };

      // send that object
      MODEL.setUserInfo(userObj);

      $("#fName").val("");
      $("#lName").val("");
      $("#email").val("");
      $("#pw").val("");
    }
    // console.log(`${fn} ${ln} ${email} ${pw}`);
  });
}

function trace(fileName, log) {
  console.log(fileName + " " + log);
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});
