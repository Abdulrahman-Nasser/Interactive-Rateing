let btn = document.querySelectorAll(".btn");
let submit = document.querySelector(".submit");
let ratingText = document.querySelector(".rating-text")
let thankMsg = document.querySelector(".thank-msg")
let selectedRate = document.querySelector(".selected-rate")
let mode , x = 1
let container ,container2

// to select rating
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if(mode == 2){
       container.classList.remove("bg-clicked")
       btn[i].classList.remove("btn")
       container.classList.add("btn")
       btn[i].classList.add("bg-clicked")
       container = btn[i]
       container2 = btn[i].innerText
       x = 2
    }else{
        btn[i].classList.remove("btn")
        btn[i].classList.add("bg-clicked")
        container = btn[i]
        container2 = btn[i].innerText
        mode = 2
        x = 2
    }
  });
}

// to submit rating
submit.addEventListener("click",function(){
    if(x == 2){
        ratingText.style.display = "none"
        thankMsg.style.display = "block"
        selectedRate.innerHTML = container2
    }else {
        ratingText.style.display = "none"
        thankMsg.style.display = "block"
        selectedRate.innerHTML = 0
    }
})


// animation JS
wow = new WOW({
    boxClass: "animate__animated", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
wow.init();

