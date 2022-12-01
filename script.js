document.querySelector(".popup-btn").addEventListener("click", function(){
    document.body.classList.add("active-popup");
})
document.querySelector(".nav-item2").addEventListener("click", function(){
    document.body.classList.add("active-popup");
})

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})


async function connect() {
    if (typeof window.ethereum !== "undefined") {
       await ethereum.request({ method: "eth_requestAccounts"});
    }
}
