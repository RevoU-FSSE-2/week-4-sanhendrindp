"use strict";

// const submitForm = document.querySelector("button");

// submitForm.addEventListener("click", function () {
//   alert("UNDER CONSTRUCTION... 🚧👷‍♂️, waiting for next week.");
// });

// TYPED JS
const typed = new Typed(".multiple-text", {
  strings: ["Freelancer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// SMTP JS
const sendEmail = function () {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fortesting2498@gmail.com",
    Password: "1F4F6E094B3027735B72470A05491F3901C2",
    To: "leystriit98@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
};
