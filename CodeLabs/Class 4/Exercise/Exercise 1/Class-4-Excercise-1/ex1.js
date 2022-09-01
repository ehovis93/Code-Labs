const mainHeading = document.querySelector('h1');
const button = document.querySelector(".btn-main");

function changeBGColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor=(`#${randomColor}`);
}
function changeTextColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color=(`#${randomColor}`);
}

button.addEventListener('click', changeTextColor);
button.addEventListener('click', changeBGColor);
