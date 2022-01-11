// close and open of menu in mobile screen

const openMark = document.querySelector(".menu-btn")
const mainMenu = document.querySelector(".side-menu")
const closeMark = document.querySelector(".side-menu img")

openMark.addEventListener("click", function(){
    mainMenu.style.cssText = "display:block; visibility: visible; opacity:1"
})
closeMark.addEventListener("click", function(){
    mainMenu.style.cssText = "display:none; visibility: hidden; opacity:0"
})

/*************************************************************************************************************/

// moving between pages and adding class Active

let linkItems = document.querySelectorAll(".side-menu ul a")

linkItems.forEach((item)=>{
    item.addEventListener("click",function(){
        linkItems.forEach((el)=>el.classList.remove("active"))
        item.classList.add("active")
    })
})