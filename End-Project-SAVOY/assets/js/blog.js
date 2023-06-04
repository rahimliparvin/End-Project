"use strict";



//////////////// Categories Header /////////////////////


let categoriesBtn = document.querySelector(".categoriesBtn");

categoriesBtn.addEventListener("mouseover",function(e){
    e.preventDefault();
    let categoriesTitle = document.querySelector(".categoriestitle");
    categoriesTitle.classList.remove("d-none");
})

categoriesBtn.addEventListener("mouseout",function(e){
    e.preventDefault();
    let categoriesTitle = document.querySelector(".categoriestitle");
    categoriesTitle.classList.add("d-none");

    categoriesTitle.addEventListener("mouseover", function(){
        categoriesTitle.classList.remove("d-none");
    })

    categoriesTitle.addEventListener("mouseout", function(){
        categoriesTitle.classList.add("d-none");
    })
})




///////////////// Tab-Menu /////////////////

let headers = document.querySelectorAll("#blogpage .tabmenu .item");

let contents = document.querySelectorAll("#blogpage .content .item");

headers.forEach(element => {
    element.addEventListener("click", function(){
        document.querySelector("#blogpage .tabmenu .active").classList.remove("active");
        this.classList.add("active");

        contents.forEach(content => {
          if(content.getAttribute("data-id") == this.getAttribute("data-id"))
          {
            content.classList.remove("d-none");
          }
          else{
            content.classList.add("d-none");
          }
        });

    })
});

///////////////// BlogPlus d-none ///////////////

let cartImgs = document.querySelectorAll("#blogpage .content .blogcart .cartimg");

cartImgs.forEach(cartImg => {
    
    cartImg.addEventListener("mouseover",function(){

        this.nextElementSibling.classList.remove("d-none");
    })

    cartImg.addEventListener("mouseout",function(){
        this.nextElementSibling.classList.add("d-none");
    })

    cartImg.nextElementSibling.addEventListener("mouseover",function(){

        this.classList.remove("d-none");
    })

    cartImg.nextElementSibling.addEventListener("mouseout",function(){

        this.classList.add("d-none");
    })

});