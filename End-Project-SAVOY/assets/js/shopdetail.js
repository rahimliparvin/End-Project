"use strict"



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

//////////////////////////


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
})

//////////////////////////


let headers = document.querySelectorAll("#carouselshop .productdetail .headers li");

headers.forEach(header => {

  header.addEventListener("click", function () {

    let as = document.querySelector("#carouselshop .productdetail .headers .active");

    as.classList.remove("active");

    header.classList.add("active");

    let contents = document.querySelectorAll("#carouselshop .productdetail .content div");

    contents.forEach(content => {

      if (content.getAttribute("data-id") == header.getAttribute("data-id")) {

        content.classList.remove("d-none");
      }
      else {
        content.classList.add("d-none");
      }

    });


  })

});

let minus = document.querySelector(".productinfos .quantity .fa-minus");

minus.addEventListener("click", function () {

  let num = this.parentNode.nextElementSibling.firstElementChild.value;

  if (num > 1) {

    num = num - 1;
    this.parentNode.nextElementSibling.firstElementChild.value = num;
  }
  else {

    return;

  }

});

let plus = document.querySelector(".productinfos .quantity .fa-plus");

plus.addEventListener("click", function () {

  let num = this.parentNode.previousElementSibling.firstElementChild.value;

  let newNum = parseInt(num) + 1;

  this.parentNode.previousElementSibling.firstElementChild.value = newNum;


})

