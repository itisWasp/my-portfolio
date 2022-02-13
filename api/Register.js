
// const registerUser = () => {

//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const password2 = document.getElementById('confirmPassword');
    

//     const UserValues = {
//         method : 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body : JSON.stringify({
//             UserName : username.value,
//             Email : email.value,
//             Password : password2.value
//         })
//     }

//     fetch('https://my-portfolio-back-end.herokuapp.com/api/register', UserValues).then(
//     response => response.json()).then(data => console.log(data));
// };

// module.exports = registerUser();