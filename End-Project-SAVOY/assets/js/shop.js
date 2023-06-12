"use strict";


let shopBtn = document.querySelector(".shopBtn");


shopBtn.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let shopPage = document.querySelector(".shop-pages");
    shopPage.classList.remove("d-none");
})

shopBtn.addEventListener("mouseout", function (e) {
    e.preventDefault();
    let shopPage = document.querySelector(".shop-pages");
    shopPage.classList.add("d-none");

    shopPage.addEventListener("mouseover", function () {
        shopPage.classList.remove("d-none");
    })

    shopPage.addEventListener("mouseout", function () {
        shopPage.classList.add("d-none");
    })
})


//////////

let categoriesBtn = document.querySelector(".categoriesBtn");

categoriesBtn.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let categoriesTitle = document.querySelector(".categoriestitle");
    categoriesTitle.classList.remove("d-none");
})

categoriesBtn.addEventListener("mouseout", function (e) {
    e.preventDefault();
    let categoriesTitle = document.querySelector(".categoriestitle");
    categoriesTitle.classList.add("d-none");

    categoriesTitle.addEventListener("mouseover", function () {
        categoriesTitle.classList.remove("d-none");
    })

    categoriesTitle.addEventListener("mouseout", function () {
        categoriesTitle.classList.add("d-none");
    })
})

//////////////

let pagesBtn = document.querySelector(".pagesBtn");


pagesBtn.addEventListener("mouseover", function (e) {
    e.preventDefault();
    let pages = document.querySelector(".pages");
    pages.classList.remove("d-none");
})

pagesBtn.addEventListener("mouseout", function (e) {
    e.preventDefault();
    let pages = document.querySelector(".pages");
    pages.classList.add("d-none");

    pages.addEventListener("mouseover", function () {
        pages.classList.remove("d-none");
    })

    pages.addEventListener("mouseout", function () {
        pages.classList.add("d-none");
    })
});

///////////////////////////// Tab Menu ////////////////////

let headers = document.querySelectorAll("#categories-search-filter .categoriesname ul li");

let contents = document.querySelectorAll("#categories-search-filter .content .item");

headers.forEach(header => {

    header.addEventListener("click", function () {

        document.querySelector("#categories-search-filter .categoriesname ul .active").classList.remove("active");
        header.classList.add("active");

        contents.forEach(content => {
            if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        });

    })

});


/////////////////////////////////



let firstImgs = document.querySelectorAll("#categories-search-filter .content .item .productcart .firstimg");

firstImgs.forEach(firstImg => {

    firstImg.addEventListener("mouseover", function () {
        this.classList.add("d-none");
    })

    let secondImgs = document.querySelectorAll("#categories-search-filter .content .item .productcart .secondimg");

    secondImgs.forEach(secondImg => {
        secondImg.addEventListener("mouseout", function () {
            firstImg.classList.remove("d-none");
        })

    });
});


//////////////// wishlist icon heart //////

let hearts = document.querySelectorAll(".content .productcart .like");

hearts.forEach(heart => {

    heart.addEventListener("click", function () {

        this.classList.add("d-none");
        this.nextElementSibling.classList.remove("d-none");
    })
});


let likeHearts = document.querySelectorAll(".content .productcart .dislike");

likeHearts.forEach(likeHeart => {

    likeHeart.addEventListener("click", function () {

        this.classList.add("d-none");
        this.previousElementSibling.classList.remove("d-none");
    })
});

/////////////////// Search button ///////////////

let search = document.querySelector("#categories-search-filter .filtersort ul :nth-child(2)");

search.addEventListener("click", function () {

   let searchArea = document.querySelector("#categories-search-filter .searcharea");

   if(searchArea.classList.contains("d-none")){

    searchArea.classList.remove("d-none");
   }
   else{
    searchArea.classList.add("d-none");
    document.querySelector("#categories-search-filter .searcharea input").value = "";
   }

});


/////////////////// Close Search area /////////////////

let closeIcon = document.querySelector("#categories-search-filter .searcharea .fa-xmark");

closeIcon.addEventListener("click",function(){

    document.querySelector("#categories-search-filter .searcharea").classList.add("d-none");

    document.querySelector("#categories-search-filter .searcharea input").value = "";

});


///////////////// Filter area ////////////////////////////


let filter = document.querySelector("#categories-search-filter .filtersort ul :nth-child(1)");

filter.addEventListener("click",function(){

    let filterArea = document.querySelector("#categories-search-filter .filter");

    if(filterArea.classList.contains("d-none")){

        filterArea.classList.remove("d-none");
    }
    else{
        filterArea.classList.add("d-none");
    }
});