let page = document.querySelectorAll(".page")
let parentBascket = document.querySelector(".parent_bascket");
let pageParent = document.querySelector(".page-parent")
let sumBtn = document.querySelector('.sum-btn')
let payBtn = document.querySelector('.sect1-p2')
let arr = [];
let allSum;
let sum = 0;
if (!localStorage.hasOwnProperty("bascket")) {
  pageParent.style.display = "none"
  parentBascket.innerHTML = ` <div class="main-sect1-div1">
  <div class="div1-1">
  <div>
    <img src="../images/sad 1.png" alt="">
    <p>Пока что здесь ничего нет, перейдите в <br> каталог и добавьте интересующий товар</p>
  </div>
  <div class="sect1-div1-1">
    <div class="sect1-p2-div">
      <button class="sect1-p2">Посмотреть каталог</button>
    </div>
</div>
</div>`;
  parentBascket.append(div);

} else {
  let dataReceived = JSON.parse(localStorage.getItem("bascket"));
  dataReceived.forEach((e) => {
    fetch(`https://retoolapi.dev/mDmBu5/whell/${e.id}`)
      .then((arr) => arr.json())
      .then((item) => {
        let div = document.createElement("div");
        div.classList.add("sect3-items5-div")
        div.innerHTML=` <img class="image-wheel" src="${item.img}"><h2 class = "item5-div2-h2">${item.title}</h2> <p class = "item5-div2-p">${item.about}</p><div class="for-whell"><p class="price">${item.price*e.count}</p><div class="count-div"><p>${e.count}</p></div><button class="add-btn"><img src="../images/trash.png" class="trash-img"></button></div>`;
        parentBascket.append(div);
        sum += +item.price*e.count;
       allSum = sum   
      })
      .then((pageination)=>{

      })
       .then(() => {
        arr.push(allSum) 
       })
       .finally(()=>  sumBtn.innerHTML = arr[arr.length-1]
      )
//       <div class="product-card">
// <div class="product-img"><img src="${car.img}" alt="" /></div>
// <div class="product-name"><p>${car.brand}</p></div>
// <div class="product-text">
// <p>${car.about}</p>
// </div>
// <div class="product-price">
// <p>${car.price}р.</p>
// <span class="mention">
// <span class="minus"></span>${e.count}<span class="plus"></span></span
// >
// <button><img src="../home page/img/bucket.svg" alt="" /></button>
// </div> `;

      });
      payBtn.addEventListener('click',()=>{
        window.location.href = "../index.html"
      })
  };
