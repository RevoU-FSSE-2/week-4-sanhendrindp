"use strict";

// TYPED JS
const typed = new Typed(".multiple-text", {
  strings: ["Freelancer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// SMTP JS
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  let bodyEmail = `
  <b>Name: </b>${fullName.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Phone no: </b>${phone.value}
  <br>
  <b>Message: </b>${message.value}
  `;

  Email.send({
    SecureToken: "0729a384-ce78-45b9-a26a-0487d93b18f1",
    To: "fortesting2498@gmail.com",
    From: "fortesting2498@gmail.com",
    Subject: "Form contact from sanhendrindp site",
    Body: bodyEmail,
  }).then((message) => alert(message));
});
