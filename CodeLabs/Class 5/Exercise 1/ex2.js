const body = document.body;
const input = document.querySelector(".name-input");
const overlay = document.querySelector(".overlay");

input.addEventListener("focus", focusInput);
overlay.addEventListener("click" endFocus);

function focusInput(){
    body.classList.add("focus-form");
}
function endFocus(){
    if(body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}