"use strict"
import {updateCookie, deleteCookie} from "./visitedCount.js";

const visitedCount = document.getElementById("visitedCount");
const reloadBtn = document.getElementById("reloadBtn");
const deleteBtn = document.getElementById("deleteBtn");


updateCookie(visitedCount)

reloadBtn.addEventListener("click", function(){
  location.reload();
})

deleteBtn.addEventListener("click", function(){
  deleteCookie("visitedCount")
})
