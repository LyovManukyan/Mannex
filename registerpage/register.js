const registor = {
  email: "",
  lastName: "",
  password: "",
  firstName: "",
  middleName: "",
  passwordRepeat: "",
};

const form = document.formRegistor;
form[0].addEventListener("change", (event) => {
  if ((registor.email = event.target.value)) {
    form[0].classList.add("success");
  } else {
    form[0].classList.add("error");
    form[0].nextElementSibling.innerHTML = "Mutqagreq email";
  }
});
form[1].addEventListener("change", (event) => {
  if (event.target.value.match(/[A-Z]{2}[0-9]{2}[a-z]{4}\W.$/)) {
    registor.password = event.target.value;
    form[1].classList.add("success");
  } else {
    form[1].classList.add("error");
    form[1].nextElementSibling.innerHTML ="Petqa sksvi 2 hat mecatar 2 hat tiv 4 hat poqratar 1 simvol u 1 hat cankacac simvol";
  }
});
form[2].addEventListener("change", (event) => {
  console.log(registor.password);
  console.log(event.target.value);
  if (registor.password === event.target.value) {
    registor.passwordRepeat = event.target.value;
    form[2].classList.add("success");
  } else {
    form[2].classList.add("error");
    form[2].nextElementSibling.innerHTML = "Krknel password@";
  }
});
form[3].addEventListener("change", (event) => {
  if (event.target.value.match(/^[A-Z]/)) {
    registor.firstName = event.target.value;
    form[3].classList.add("success");
  } else {
    form[3].classList.add("error");
    form[3].nextElementSibling.innerHTML = "Mutqagreq firstName";
  }
});
form[4].addEventListener("change", (event) => {
  if (event.target.value.match(/^[A-Z]/)) {
    registor.lastName = event.target.value;
    form[4].classList.add("success");
  } else {
    form[4].classList.add("error");
    form[4].nextElementSibling.innerHTML = "Mutqagreq lastName";
  }
});
form[5].addEventListener("change", (event) => {
  if (event.target.value.match(/^[A-Z]/)) {
    registor.middleName = event.target.value;
    form[5].classList.add("success");
  } else {
    form[5].classList.add("error");
    form[5].nextElementSibling.innerHTML = "Mutqagreq middleName";
  }
});
form.addEventListener("submit", (e) => e.preventDefault());
form[6].addEventListener("click", function () {
  fetch("https://retoolapi.dev/u1m7KW/registor", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registor),
  })
  .then((response) => response.json())
  .then((response) =>window.location.href='../loginPage/loginpage.html')
  .catch((er) => console.error(er)
  )
})
