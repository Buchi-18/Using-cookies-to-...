"use strict";

setCookie("name", "value1", { "max-age": 360 });
setCookie("user", "value2", { "max-age": 360 });

const cookies = document.cookie; // クッキーを全部取得
const cookieName = "visitedCount"; //判定用の名前
let count; //訪問回数

deleteCookie(cookieName) 

// ****************************************
// export function
// ****************************************
// 訪問回数の表示
export function updateCookie(visitedCount) {
  if (cookies.indexOf(cookieName) === -1) {
    count = 1;
    setCookie(cookieName, count, { "max-age": 360 });
    render(count);
  } else if (cookies.indexOf(cookieName) > -1) {
    getCurrentCount();
    count++;
    setCookie(cookieName, count, { "max-age": 360 });
    render(count);
  }
}
// クッキーの削除
export function deleteCookie(name) {
  count = 0;
  setCookie(name, "", {
    "max-age": 0,
  });
  render(count);
}
// ****************************************
// inner function
// ****************************************
// クッキーをセット
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
// ビジットカウントの取得
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
// 表示内容の取得
function render(count){
  visitedCount.innerHTML = `<p>Visited count = <span class="strong">${count}</span> time.</p>`
}
