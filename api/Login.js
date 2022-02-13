const LoginUser = () => {

    const email = document.getElementById('email');
    const password2 = document.getElementById('confirmPassword');
    

    const UserValues = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({
            Email : email.value,
            Password : password2.value
        })
    }

    fetch('https://my-portfolio-back-end.herokuapp.com/api/login', UserValues).then(
    response => response.json()).then(data => console.log(data));
};

LoginUser();