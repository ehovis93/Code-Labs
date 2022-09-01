// const allLinks = [];
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];

const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");

input.addEventListener("focusin", focusInput);
overlay.addEventListener("focusout", endFocus);

function focusInput(){
    body.classList.add("focus-form");
}
function endFocus(){
    if(body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}
const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");

form.addEventListener("submit", createLink);

// function createLink(e) {
//     e.preventDefault();
    // const url = input.value;
    // const linkContainer = document.createElement("li");
    // const newLink = document.createElement("a")
    // newLink.className = "link";
    // newLink.innerText = url;
    // newLink.href = url;
    // newLink.target = "_blank";
    // linkContainer.appendChild(newLink);
    // linkList.appendChild(linkContainer);
    // saveLinkListToLoaclStorage(allLinks);
    form.reset();
    
    // }
    function createLink(e) {
    allLinks.push(url);
    }

    populateLinkList(allLinks);
      
function populateLinkList(links= {}) {
    linkList.innerHTML= links
    .map(
        (link, idx) => `
        <li data=index=${idx}> 
        <a class="link" href=${link.url} target="_blank">${link.title}</a> 
        <button class="close-btn">&times;</button>
        </li>`
        )
        .join("");
}
function saveLinkListToLoaclStorage(links =[]){
    localStorage.setItem("link_list", JSON.stringify(links));
}
linkList.addEventListener("click", removeLink);

function removeLink(e) {
    if (!e.target.matches(".close-btn")) return;
    const idx = e.target.parentNode.dataset.index;
    allLinks.splice(idx,1);
    populateLinkList(allLinks);
    saveLinkListToLoaclStorage(allLinks);
}
populateLinkList(allLinks);

const BASE_URL = "https://opengraph.io/api/1.1/site";
const API_KEY = "fdcc299a-6adc-43d0-ac90-167c1cbadf5";

async function fetchURLMetaData(url) {
    const res = await fetch(
        `${BASE_URL}/${encodeURIComponent(url)}?app_id-${API_KEY}`
    );
    const data=await res.json();

    if(data.code < 0 || data.code >= 300) alert("Error with that URL");
    return { title: data.hybridGraph.title, image: data.hybridGraph.image, url};
}
async function createLink(e) {

}