/////////////////////////////////////////Burger-Menu//////////////////////////////////////////

let burgerMenu = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let secondMenuDiv = document.querySelector('.menu2div')
let secondMenu = document.querySelector('.menu2')
let searchShow = document.querySelector('.search')
let searchBtn = document.querySelector('.search-btn')
let searchInp = document.querySelector('.search-inp')
burgerMenu.addEventListener('click',()=>{
  searchShow.classList.toggle('search-show')
  searchBtn.classList.toggle('search-btn1')
  searchInp.classList.toggle('search-inp1')
  menu.classList.toggle("menu-block")
  secondMenuDiv.classList.toggle("menu2new")
  secondMenu.classList.toggle("menu2ul")
  document.querySelector(".burger-itm1").classList.toggle("hamburger-item1")
  document.querySelector(".burger-itm2").classList.toggle("hamburger-item3")
  document.querySelector(".burger-itm3").classList.toggle("hamburger-item2")
})