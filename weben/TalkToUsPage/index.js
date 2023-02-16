var form = document.getElementById("form");
function validationEmail() {
  let email = document.getElementById("email").value;
  let text = document.getElementById("email-error");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address in valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
function validationMobile() {
  let mobile = document.getElementById("mobile").value;
  let text = document.getElementById("email-error");
  let re1 = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

  if (mobile.match(re1)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your mobile number in valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid mobile number";
    text.style.color = "#ff0000";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
let localData = JSON.parse(localStorage.getItem("items")) ?? [];
function validateForm(e) {
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let Id = document.getElementById("option").value;
  let el = {
    mobile: mobile,
    email: email,
    Id: Id,
  };
  console.log(el);
  if (mobile.length === 10 && email.length > 10) {
    localData.push(el);
    localStorage.setItem("items", JSON.stringify(localData));

    e.preventDefault();
    location.href = "../Thanks/thank.html";
  } else {
    alert("please enter valid data");
  }
}

document.getElementById("form").addEventListener("submit", validateForm);
