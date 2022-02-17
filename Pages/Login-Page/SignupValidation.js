const form = document.getElementById("signup");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};

//check validation before submitting.

const checkUsername = () => {
  let valid = false;
  const userNameValue = username.value.trim();
  if (userNameValue === "") {
    setError(username, "UserName is required");
  } else if (userNameValue.length < 5) {
    setError(username, "UserName must be at least 5 characters");
  } else {
    setSuccess(username);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  if (passwordValue === "" || passwordValue2 === "") {
    setError(password, "Password is required");
    setError(password2, "Password is required");
  } else if (passwordValue.length < 8 || passwordValue2.length < 8) {
    setError(password, "Password must be at least 8 character.");
    setError(password, "Password must be at least 8 character.");
  } else if (passwordValue2 !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validate forms
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();

  let isFormValid = isEmailValid && isPasswordValid && isUsernameValid;

  if (isFormValid) {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password2 = document.getElementById("confirmPassword");
    var element = document.getElementById("load");
    element.classList.add("fa");

    const UserValues = {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
      body: JSON.stringify({
        UserName: username.value,
        Email: email.value,
        Password: password2.value,
      }),
    };

    fetch(
      "https://my-portfolio-back-end.herokuapp.com/api/register",
      UserValues
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.message == 'Email already Exists') {
          element.classList.remove("fa");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email already Exists!',
          })
        }
        else {
          element.classList.remove("fa");
          swal({
            title: "Success!",
            text: "Redirecting in 2 seconds.",
            type: "success",
            timer: 2000,
            showConfirmButton: false
          }, function(){
                window.location.href = "login.html";
          });
        } ;
      });

      

  }
});
