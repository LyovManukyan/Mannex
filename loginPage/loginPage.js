const form = document.form 
const url = 'https://retoolapi.dev/u1m7KW/registor'

function sendRequest(method,url) {
    fetch('https://retoolapi.dev/u1m7KW/registor')
    .then(response => response.json())
    .then(response => response.filter(user =>user.email === form[0].value))
    .then(response => localStorage.setItem('value',JSON.stringify(response[0])))
    .then(page =>window.location.href='../personalcabinet/personalcabinet.html')
}
form.addEventListener('submit',event => event.preventDefault())
form[2].addEventListener('click',() =>sendRequest())