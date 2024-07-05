let contactForm = document.getElementsByClassName("form")[0];
let userName = document.getElementsByName("userName")[0];
let email = document.querySelector("[name='email']");
let message = document.querySelector("[name='message']");
let checkForm = document.getElementById("checkForm");

function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const checkUserName = data["userName"] != "" || data["userName"].length > 30;
  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data["email"]
    );

  const checkMessage = data["message"] != "";

  if (checkUserName) {
    userName.style.border = "2px solid hsl(231, 7%, 60%)";
    userName.style.backgroundColor = "transparent";
  } else {
    userName.style.border = "2px solid hsl(4, 100%, 67%)";
    userName.style.backgroundColor = "hsl(4, 100%, 67% , 0.1)";
  }

  if (checkEmail) {
    email.style.border = "2px solid hsl(231, 7%, 60%)";
    email.style.backgroundColor = "transparent";
  } else {
    email.style.border = "2px solid hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 100%, 67% , 0.1)";
  }

  if (checkMessage) {
    message.style.border = "2px solid hsl(231, 7%, 60%)";
    message.style.backgroundColor = "transparent";
  } else {
    message.style.border = "2px solid hsl(4, 100%, 67%)";
    message.style.backgroundColor = "hsl(4, 100%, 67% , 0.1)";
  }

  if (checkEmail && checkMessage && checkUserName) {
    checkForm.innerHTML = "Your feedback sent successfully";
    checkForm.style.color = "#353535";
  } else {
    checkForm.innerHTML = "Please fill out the entire form";
    checkForm.style.color = "hsl(4, 100%, 67%)";
  }
}

contactForm.addEventListener("submit", handleSubmit);
