// close and open of menu in mobile screen

const openMark = document.querySelector(".menu-btn")
const mainMenu = document.querySelector(".side-menu")
const closeMark = document.querySelector(".side-menu img")

window.onload = function(){
    if(window.innerWidth<= 576){

        mainMenu.style.cssText = "display:none; visibility: hidden; opacity:0"
    }
    
}
// Changing the displauy and the vis
openMark.addEventListener("click", function(){
    mainMenu.style.cssText = "display:block; visibility: visible; opacity:1"
})
closeMark.addEventListener("click", function(){
    mainMenu.style.cssText = "display:none; visibility: hidden; opacity:0"
})


/*************************************************************************************************************/

// moving between pages and adding class Active

const linkItems = document.querySelectorAll(".side-menu ul a")

linkItems.forEach((item)=>{
    item.addEventListener("click",function(){
        linkItems.forEach((el)=>el.classList.remove("active"))
        item.classList.add("active")
        
        // If we are using side menu we have to close it after preesing on any section
        if(window.innerWidth <= 575){
            mainMenu.style.cssText = "display:none; visibility: hidden; opacity:0"
        }
    })
})

/*****************************************************************************************************************/

// image slider for destination, vrew pages

const imgs = document.querySelectorAll(".img-slider img")
const btns = document.querySelectorAll(".slider-btns a")
const infos = document.querySelectorAll(".info-slider .card")

btns.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        btns.forEach((btn)=>{
            if(btn.parentElement.classList.contains("destination")){
                btn.classList.remove("active")//removing class active first from all links
            }else if(btn.parentElement.classList.contains("crew")){
                btn.classList.remove("active-bullet")//removing class active first from all links
            }else if(btn.parentElement.classList.contains("technology")){
                btn.classList.remove("active-ball")//removing class active first from all links
            }
        })
        if(btn.parentElement.classList.contains("destination")){
            btn.classList.add("active") // adding class active to the clicked link
        }else if(btn.parentElement.classList.contains("crew")){
            btn.classList.add("active-bullet") // adding class active to the clicked link
        }else if(btn.parentElement.classList.contains("technology")){
            btn.classList.add("active-ball") // adding class active to the clicked link
        }
        

        // Manipulating with img slider
        imgs.forEach((img)=>{

            img.classList.remove("visible") // removing class visible from all images first

            // condition if the source of image contains the data-class of the button then add class cisible to that image
            if(img.getAttribute("src").indexOf(btn.dataset.class)!== -1){ 
                img.classList.add("visible")
            }
        })

        // Manipulating with infos slider
        infos.forEach((info)=>{
            info.classList.remove("visible") // first removing class visible from all info

            // Check if info classes has class named with the dataset class name of the btn
            if(info.classList.contains(btn.dataset.class)){

                // Adding visible class tho that info
                info.classList.add("visible")
            }
        })
    })
})

/*************************************************************************************************************/

// changing the src of images of the technology page
const imgsTechnology = document.querySelectorAll(".technology .img-slider img")

window.addEventListener("load", function (){
    if(window.innerWidth >= 992){
        imgsTechnology[0].setAttribute("src","../imgs/technology/image-launch-vehicle-portrait.jpg")
        imgsTechnology[1].setAttribute("src","../imgs/technology/image-space-capsule-portrait.jpg")
        imgsTechnology[2].setAttribute("src","../imgs/technology/image-spaceport-portrait.jpg")
    }
})