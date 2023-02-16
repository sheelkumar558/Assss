let localData = JSON.parse(localStorage.getItem("items")) ?? [];
var main = document.getElementById("main");
showData(localData);
async function showData(data) {
  main.innerHTML = "";
  try {
    data.forEach((el) => {
      console.log(el);
      let div = document.createElement("div");
      let email = document.createElement("p");
      email.innerText = el.email;
      let mobile = document.createElement("p");
      mobile.innerText = `${el.Id}-${el.mobile}`;

      div.append(email, mobile);
      main.append(div);
    });
  } catch (err) {
    console.log(err);
  }
}
//
