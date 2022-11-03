// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");

// function sendMessage() {
//   if (nameInput.value.lenght < 1) {
//     errorNodes[0].innerText = "Name cannot be blank";
//   }
// }

const scriptURL = "https://script.google.com/macros/s/AKfycbz0mykmPpJLWbJCQ5uM6mNJmjAEn-kubnqdSdTzGZeOXbeacu-q9c8OYCm8d-W0Mc5Wnw/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var body = "name: " + name + "<br> Email: " + email + "<br><br>" + message;
//   Email.send({
//     Host: "",
//     Username: "",
//     Password: "",
//     To: "",
//     From: email,
//     Subject: "New Message",
//     Body: body,
//   }).then((message) => alert("Pesan telah dikirim"));
// });
