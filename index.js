const targetDiv = document.getElementById("container");
const targetDiv1 = document.getElementById("heading");
const btn = document.getElementById("but");
var element = document.getElementById('but');
var text = element.innerText
btn.onclick = function () {
  if (targetDiv.style.visibility !== "visible") {
    targetDiv.style.visibility = "visible";
    targetDiv1.style.visibility = "visible";
    element.innerText = "Bujhaao!";
  } else {
    targetDiv.style.visibility = "hidden";
    targetDiv1.style.visibility = "hidden";
    element.innerText = "Jalao!";
  }
};