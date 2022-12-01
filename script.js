/////////////////////////////////////////SLIDER-Small_Screen//////////////////////////////////////////

let img = document.querySelector(".slide-img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let arr = ["./images/Товар.png", "./images/wheel1.png", "./images/whell2.png","./images/whell4.png"];
let i = 0;
let count = document.querySelector(".count-of-slider");
// console.log(arr);
count.innerHTML = `<span class="btncolor">01/</span><span>0${arr.length}</span>` ;


function nextSlide() {
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img.src = arr[i];
  count.innerHTML = `<span class="btncolor">0${i + 1}/</span><span>0${arr.length}</span> `;
  return i;
}
next.addEventListener("click", nextSlide);

function prevSlide() {
  if (i <= arr.length - 1 && i > 0) {
    i--;
  } else if (i == 0) {
    i = arr.length - 1;
  }
  img.src = arr[i];
  count.innerHTML = `<span class="btncolor">0${i + 1}/</span><span>0${arr.length}</span> `;
  return i;
}
prev.addEventListener("click", prevSlide);
next.addEventListener('click',()=>{
  next.style.background = "#4BA9FF"
  prev.style.background = "white"
})
prev.addEventListener("click",()=>{
  next.style.background = "white"
  prev.style.background = "#4BA9FF"
})

/////////////////////////////////////////SLIDER_Big_Screen//////////////////////////////////////////

let img2 = document.querySelector(".slide-img1");
let next1 = document.querySelector(".next1");
let prev1 = document.querySelector(".prev1");
let arr1 = ["./images/Товар.png", "./images/wheel1.png", "./images/whell2.png","./images/whell4.png"];
let j = 0;
let count1 = document.querySelector(".count-of-slider1");
count1.innerHTML = `<span class="btncolor">01/</span><span>0${arr1.length}</span>` ;
function nextSlide1() {
  if (j == arr1.length - 1) {
    j = 0;
  } else {
    j++;
  }
  img2.src = arr1[j];
  count1.innerHTML = `<span class="btncolor">0${j + 1}/</span><span>0${arr1.length}</span> `;
  return j;
}
next1.addEventListener("click", nextSlide1);

function prevSlide1() {
  if (j <= arr1.length - 1 && j > 0) {
    j--;
  } else if (i == 0) {
    j = arr.length - 1;
  }
  img2.src = arr1[j];
  count1.innerHTML =` <span class="btncolor">0${j + 1}/</span><span>0${arr1.length}</span>` ;
  return j;
}
prev1.addEventListener("click", prevSlide1);
next1.addEventListener('click',()=>{
  next1.style.background = "#4BA9FF"
  prev1.style.background = "white"
})
prev1.addEventListener("click",()=>{
  next1.style.background = "white"
  prev1.style.background = "#4BA9FF"
})

const countItemsPerPage =window.innerWidth > 1440 ? 6 : window.innerWidth > 1024 ? 4 : 2; 
const parent = document.querySelector(".cards");
const pageCount = document.querySelector(".page");
const loadAnimation = document.querySelector('.loader')
let currentPage = 1;
let response; 
let allData =[];


async function allDataCollector() {
     const data = await fetch("https://retoolapi.dev/mDmBu5/whell");
     allData = await data.json();
     
} 

async function dataReceived() {
  
  const data = await fetch(`https://retoolapi.dev/mDmBu5/whell?_page=${currentPage}&_limit=${countItemsPerPage}`);
  response = await data.json();
loadAnimation.style.display = 'none'
}

async function changePage(page) {
  await allDataCollector()
  await dataReceived();
  const pageNum = () => Math.ceil(allData.length / countItemsPerPage);
 
  if (page <= 1) {
    page = 1;
  }
  if (page > pageNum()) {
    page = pageNum();
  }
  pageCount.innerHTML = page;
 
  document.querySelector(".sect3-grid-items5").innerHTML = "";
  response.forEach(item => {
  
   const div = document.createElement('div');
   div.dataset.id = item.id;
  div.classList.add("sect3-items5-div")
  div.innerHTML =` <img class="image-wheel" src="${item.img}"><h2 class = "item5-div2-h2">${item.title}</h2> <p class = "item5-div2-p">${item.about}</p><div class="for-whell"><p class="price">${item.price}</p><div class="count-div"><span class="minus">-</span><p>1</p><span class="plus">+</span></div><button class="add-btn"><img src="./images/shop.png"></button></div>`

currentPage = page
      document.querySelector(".sect3-grid-items5").append(div);
    }
  )
addBascket(response)
  let move = 1;
  let count = [];
  let pageDots = [];
  let elem;
  let right = page + move +1;
  let left = page - move;
for(let i = 1 ; i <= pageNum(); i++){
  if(i ===1 ||i === pageNum() || (i >= left && i < right)) {
   count.push(i)
  }
}
for(let i of count) {
 if(elem){
  if(i - elem == 2) {
    pageDots.push(elem+1);
  }else if(i - elem != 1) {
    pageDots.push('...')
  }
 }
 pageDots.push(i)
elem = i
}
pageCount.innerHTML = '';
for(let j of pageDots) {
 let span = document.createElement('span')
 span.innerText = j;
 span.classList.remove('active')
 span.addEventListener('click',() => {
  span.classList.add('active')
  changePage(j+1)});
 pageCount.append(span)
}
}

window.onload = () => {
  changePage(1);
};

// const signInnBtn = document.querySelector('.signIn')
// localStorage.hasOwnProperty('user') ? signInnBtn.innerText = JSON.parse(localStorage.getItem('user'))[0].firstname : signInnBtn.innerText = 'Войти'

///////////////////////////For trash//////////////////////
function addBascket(response) {
  let addBtn = document.querySelectorAll(".add-btn");
  let plus = document.querySelectorAll(".plus");
  let minus = document.querySelectorAll(".minus");
  // console.log(price);
  plus.forEach((e) =>
    e.addEventListener("click", () => {
      console.log(e.parentElement.previousElementSibling);
      let count = +e.previousElementSibling.innerText + 1;
      e.previousElementSibling.innerText = count;
      response.filter((i) => {
        if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
          e.parentElement.previousElementSibling.innerText = i.price * count;
        }
      });
    })
  );
  minus.forEach((e) =>
    e.addEventListener("click", () => {
      if (+e.nextElementSibling.innerText > 1) {
        let count = +e.nextElementSibling.innerText - 1;
        e.nextElementSibling.innerText = count;
        response.filter((i) => {
          if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
            e.parentElement.previousElementSibling.innerText = i.price * count;
          }
        });
      }
    })
  );
  let arr = [];
  addBtn.forEach((i) =>
    i.addEventListener("click", () => {
      arr.push(
        createBascketItem(
          i.parentElement.parentElement.dataset.id,
          i.previousElementSibling.children[1].innerText
        )
      );
      let uniqueItem = [...new Map(arr.map((i) => [i.id, i])).values()];
      localStorage.setItem("bascket", JSON.stringify(uniqueItem));
    })
  );
}
function createBascketItem(id, count) {
  return {
    id,
    count,
  };
}




