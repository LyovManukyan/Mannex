
const user = JSON.parse(localStorage.getItem('value')) ?? []
console.log(user);
const userInfo = document.querySelector('.sect1-div')
userInfo.innerHTML = `<div><h4>Вариант регистрации</h4><h4>ID пользователя	 </h4><h4 class="h4">E-mail</h4><h4>Фамилия</h4><h4>Имя</h4><h4 class="h4">Отчество</h4><h4>Группы пользователя</h4></div><div><p>Физическое лицо</p><p>${user.id}</p><p class="h4">${user.email}</p><p>${user.lastName}</p><p>${user.firstName}</p><p class="h4">${user.middleName}</p><p>Розница</p></div>`

const change = document.querySelector('.changeBtn')

change.addEventListener('click',()=>{window.location.href='../infoeditpage/infoeditpage.html'})
