let localData = JSON.parse(localStorage.getItem("items")) ?? [];
var main = document.getElementById("main");
async function showData(data) {
  main.innerHTML = " ";
  try {
    data.forEach((el) => {
      console.log(el);
      let div = document.createElement("div");
      div.setAttribute("class", "item");
      let email = document.createElement("p");
      email.innerText = el.email;
      let mobile = document.createElement("p");
      mobile.innerText = `${el.Id}-${el.mobile}`;

      div.append(email, mobile);
      main.append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
showData(localData);
