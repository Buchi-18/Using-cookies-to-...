"use strict";

setCookie("name", "value1", { "max-age": 360 });
setCookie("user", "value2", { "max-age": 360 });

const cookies = document.cookie; // クッキーを全部取得
const cookieName = "visitedCount";
let count = 1;

updateCookie();

function updateCookie() {
  if (cookies.indexOf(cookieName) === -1) {
    setCookie(cookieName, count, { "max-age": 360 });
    document.body.innerHTML += `<p>${count}回目</p>`;
  } else if (cookies.indexOf(cookieName) > -1) {
    getCurrentCount();
    count++;
    setCookie(cookieName, count, { "max-age": 360 });
    document.body.innerHTML += `<p>${count}回目</p>`;
  }
}

function getCurrentCount() {
  const cookiesArrays = cookies.split("; ");
  cookiesArrays.forEach(function (array) {
    let checkArray = [];
    checkArray = array.split("=");
    if (checkArray[0] !== cookieName) return;
    count = parseInt(checkArray[1]);
  });
  return count;
}

// deleteCookie(cookieName);

function setCookie(name, value, addOptions = {}) {
  const defaultOptions = {
    path: "/",
    secure: true,
  };
  const options = { ...defaultOptions, ...addOptions };

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": 0,
  });
}
