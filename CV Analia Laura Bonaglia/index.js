let hidetext_btn = document.getElementById("hidetext_btn");

let hidetext = document.getElementById("hidetext");

hidetext_btn.addEventListener("click", toggletext); 
    
function toggletext() {
    hidetext.classList.toggle("show");
}