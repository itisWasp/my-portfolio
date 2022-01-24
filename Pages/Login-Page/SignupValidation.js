const form = document.getElementById('signup');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
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
    if(userNameValue === '') {
        setError(username, 'UserName is required');
    } else if (userNameValue.length <5) {
        setError(username, 'UserName must be at least 5 characters');
    } else {
        setSuccess(username);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        valid = true;
    }
    return valid;
}


const checkPassword = () => {
    let valid = false;
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();
    if(passwordValue === '' || passwordValue2 === '') {
        setError(password, 'Password is required');
        setError(password2, 'Password is required');
    } else if (passwordValue.length < 8  || passwordValue2.length < 8) {
        setError(password, 'Password must be at least 8 character.');
        setError(password, 'Password must be at least 8 character.')
    }else if (passwordValue2 !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    }
     else {
        setSuccess(password);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validate forms
    let 
    isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();

    let isFormValid = isEmailValid&&isPasswordValid&&isUsernameValid;

    if(isFormValid){
        if(window.localStorage){

            // let username = document.getElementById('username').value,
            // email = document.getElementById('email').value,
            // password = document.getElementById('password').value,
            // password2 = document.getElementById('confirmPassword').value;

             // first part of the key

          let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
          // second part of the key
          let alpha = ["a","b","c","d"];
          let as = Math.floor(Math.random()*(3-0)+0)
          let keySectionTwo = alpha[as]
          // third part of the key

          let keySectionThree = Math.floor(Math.random() * (90-10)+10);
          //final key

          let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;


            const usernameValue = username.value;
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();
            const userId = key
            
            let formData = JSON.parse(localStorage.getItem('formData')) || [];
            let exist = formData.length &&
                JSON.parse(localStorage.getItem('formData')).some(data =>
                    data.username == usernameValue &&
                    data.email == emailValue
                );
            if(!exist){
                 // first part of the key

                let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
                // second part of the key
                let alpha = ["a","b","c","d"];
                let as = Math.floor(Math.random()*(3-0)+0)
                let keySectionTwo = alpha[as]
                // third part of the key

                let keySectionThree = Math.floor(Math.random() * (90-10)+10);
                //final key

                let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;

                Users = {
                    userName : usernameValue,
                    email : emailValue,
                    password : password2Value,
                    userId: key
                }

                localStorage.setItem(key, JSON.stringify(Users));


                alert("Account Created.\n\nYou can now Login In to your account");
                location.href='login.html'
            }
            else{
                alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
            }
            // e.preventDefault();
            }
        else{
            console.log('Not supported');
        }
    }
})
