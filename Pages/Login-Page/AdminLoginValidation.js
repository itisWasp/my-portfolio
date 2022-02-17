const form = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
var element = document.getElementById("load");

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
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

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
};

//Checking Validation Before Logging In the Browser.

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
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();

  let isFormValid = isEmailValid && isPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let message = document.querySelector('.message');
    element.classList.add("fa");

    const UserValues = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Email: email.value,
        Password: password.value,
      }),
    };

    fetch("https://my-portfolio-back-end.herokuapp.com/api/admin", UserValues)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Invalid Admin Password Plz Try Again!" || data.message === "Invalid Admin Email Plz Try Again!"){
          element.classList.remove("fa");
            setError(email, '');
            setError(password,'');
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email or Password Is Invalid!',
            })
            message.innerHTML = 'Email or Password Is Invalid';   
        }
        else {
            token = data.accessToken;
            localStorage.setItem('Adminuser', token);

            element.classList.remove("fa");

            swal({
              title: "Success!",
              text: "Redirecting in 2 seconds.",
              type: "success",
              timer: 2000,
              showConfirmButton: false
            }, function(){
                  window.location.href = "../Dashboard_Admin/admin.html";
            });

        }


        


      })
    console.log("Request Sent");
    
  }
});
