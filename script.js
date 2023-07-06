"use strict";

const submitForm = document.querySelector("button");

submitForm.addEventListener("click", function () {
  alert("UNDER CONSTRUCTION... 🚧👷‍♂️, waiting for next week.");
});

// TYPED JS
const typed = new Typed(".multiple-text", {
  strings: ["Freelancer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
