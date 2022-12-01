/*const container = document.querySelector(".container")
const popup = document.querySelector(".popup")


function toggle() {
    container.classList.toggle("container-active")
    popup.classList.toggle("popup-active")
}*/
 
document.querySelector(".popup-btn").addEventListener("click", function(){
    document.body.classList.add("active-popup");
})
document.querySelector(".nav-item2").addEventListener("click", function(){
    document.body.classList.add("active-popup");
})

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})