"use strict";


let shopBtn = document.querySelector(".shopBtn");


shopBtn.addEventListener("mouseover",function(e){
    e.preventDefault();
    let shopPage = document.querySelector(".shop-pages");
    shopPage.classList.remove("d-none");
})

shopBtn.addEventListener("mouseout",function(e){
    e.preventDefault();
    let shopPage = document.querySelector(".shop-pages");
    shopPage.classList.add("d-none");

    shopPage.addEventListener("mouseover", function(){
        shopPage.classList.remove("d-none");
    })

    shopPage.addEventListener("mouseout", function(){
        shopPage.classList.add("d-none");
    })
})


//////////

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

//////////////

let pagesBtn = document.querySelector(".pagesBtn");


pagesBtn.addEventListener("mouseover",function(e){
    e.preventDefault();
    let pages = document.querySelector(".pages");
    pages.classList.remove("d-none");
})

pagesBtn.addEventListener("mouseout",function(e){
    e.preventDefault();
    let pages = document.querySelector(".pages");
    pages.classList.add("d-none");

    pages.addEventListener("mouseover", function(){
        pages.classList.remove("d-none");
    })

    pages.addEventListener("mouseout", function(){
        pages.classList.add("d-none");
    })
});

///////////////// Plus Minus /////////////////


let minus = document.querySelector("#cart .table .fa-minus");

minus.addEventListener("click",function(){

    let count = document.querySelector("#cart .table .item input").value;

   if(count > 1 ){

    count = count - 1;

    document.querySelector("#cart .table .item input").value = count;

   }
});

let plus = document.querySelector("#cart .table .fa-plus");

plus.addEventListener("click",function(){

    let count = document.querySelector("#cart .table .item input").value;

    count = parseInt(count) + 1;

    document.querySelector("#cart .table .item input").value = count;

});