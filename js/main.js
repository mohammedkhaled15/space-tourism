const openMark = document.querySelector(".menu-btn")
const mainMenu = document.querySelector(".side-menu")
const closeMark = document.querySelector(".side-menu img")

openMark.addEventListener("click", function(){
    mainMenu.classList.remove("disappear")
})
closeMark.addEventListener("click", function(){
    mainMenu.classList.add("disappear")
})