let nameBar = document.querySelector(".name__bar")
let dateBar = document.querySelector(".date__bar")

let imageBar = document.querySelector(".image__bar")
let colorBar = document.querySelector(".color__bar")
let nameError = document.querySelector(".name__error")
let outputCard = document.querySelector(".student__card")

// _____________________________card___________

let photoBar = document.querySelector(".card__photo")
let profileName = document.querySelector(".profile__name")
let cardHeaderItem = document.querySelector (".card__header__item")
let cardAgeNumber = document.querySelector(".card__age__number")
let cardAge = document.querySelector(".card__age")
let submitBtn = document.querySelector(".submit__btn")

 

submitBtn.addEventListener("click", function(e){
   e.preventDefault()
   console.log(colorBar);
    cardAge.innerHTML = dateBar.value
 
  if (nameBar.value == "") {
        nameError.innerHTML = "Please Enter Your Name"
  }else{
    profileName.innerHTML = nameBar.value
  }
  
  // dateBar.value = cardAge.value

})