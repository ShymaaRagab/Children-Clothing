let contactForm = document.getElementsByClassName("form")[0];
let userName = document.getElementsByName("userName")[0];
let email = document.querySelector("[name='email']");
let message = document.querySelector("[name='message']");
let checkForm = document.getElementById("checkForm");
// /\w+\d+@\w{2,}.com/g
contactForm.addEventListener("submit", (event) => {
  let userValid = false;
  let emailValid = false;
  let messageValid = true;
  if (userName.value !== "" && userName.value.length <= 20) {
    userValid = true;
  }
  if (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
  ) {
    emailValid = true;
  }

  if (userValid == false || emailValid == false || messageValid == false) {
    event.preventDefault();
    if (userValid == false) {
      userName.style.borderColor = "red";
    } else {
      userName.style.borderColor = "#000";
    }
    if (emailValid == false) {
      email.style.borderColor = "red";
    } else {
      email.style.borderColor = "#000";
    }

    checkForm.innerHTML = "please fill All your filds";
    checkForm.style.color = "red";
  } else {
    checkForm.innerHTML = "your message sended";
    checkForm.style.color = "#00dbc9";
  }
});
