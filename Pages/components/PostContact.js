const btn = document.getElementById('sending');
const email = document.getElementById("senderEmail");
const fullname = document.getElementById("sender");
const message = document.getElementById("senderMessage");

btn.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const ContactValues = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      'auth-token' : localStorage.getItem('Adminuser')
    },
    body: JSON.stringify({
      FullName: fullname.value,
      Email: email.value,
      Messages: message.value
    }),
  };

  fetch(
    `https://my-portfolio-back-end.herokuapp.com/api/Postcontact`,
    ContactValues
  ).then((response) => {
    if(response.status == 200) {
      alert('Your Request was successful Sent');
      location.reload();
    }
  });

});
