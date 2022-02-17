let viewUsers = () => {
  view = document.getElementById("dashboard");

  locationView = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .trafficsource{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
              margin: auto;
              
              overflow-y: scroll;
              transition: 2s;
          }
          .usersLocation{
              width: 100%;
              background-color: #24A0ED;
              height: 10%;
              position: sticky;
              top:0px
          }
          th{
            position: sticky;
            top:8px;
            transition:2s;
          }
          .usersLocation p{
              text-align: center;
              font-size: 20px;
              padding-top: 10px;
              color: white;
          }
          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
          }
          .long, .lat{
              background-color:white;
              border-radius:1px;
              width:25%;
              color:black;
          }
          .long:hover{
            background-color:#dde9f0;
          }
           .lat:hover{
              background-color:#dde9f0;
          }
          .delete{
            background-color: rgb(240, 83, 83);
            text-align: center;
          color: white;
          border-radius: 12px;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          height: 50px;
          cursor:pointer;
          border:2px solid transparent;
          transition: all 0.4s ease;
          font-family: 'Abel';
          font-size: 16px;
          font-weight: bold;
        }
        .delete:hover{
            border-color: rgb(204, 46, 46);
          background-color: #fff;
          color:rgb(204, 46, 46);
        }
      </style>
      
    
    
    
    </head>
    <body>
    
    
        <div class="trafficsource">
            <div class="usersLocation">
                <p>Users Queries</p>
            </div>
            <!--end of title-->
            
            <table class="table1">
                <tr>
                  <th> Name</th> 
                  <th> Email</th>
                  <th> Message</th>
                  <th> Action</th>
                </tr>
            
                    
                
                <tbody id="mytable">
            
                </tbody>
            
            </table>
        
           
        </div>
        
        
    </body>
    </html>  
   
    `;

  view.innerHTML = `${locationView}`;

  const ContactValues = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "auth-token": localStorage.getItem("Adminuser"),
    },
  };

  const PostValues = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "auth-token": localStorage.getItem("Adminuser"),
    },
  };

  fetch(
    "https://my-portfolio-back-end.herokuapp.com/api/contact",
    ContactValues
  )
    .then((response) => {
      return response.json();
    })
    .then((message) => {
      console.log("Returned Query ------>>>>", message);
      let mytable = document.getElementById("mytable");
      for (i = 0; i < message.length; i++) {
        let display = `
            <tr class="fetched">
            <td class="long">${message[i].fullname}</td>    
            <td class="lat">${message[i].email}</td>
            <td class="lat">${message[i].messages}</td>
            <td class="lat"><button type="submit" class="delete" id='${message[i]._id}' onclick="fetch(
              'https://my-portfolio-back-end.herokuapp.com/api/DeleteContact/${message[i]._id}',
              ${PostValues}
            )">Delete</button></td>
            </tr>
            `;
        mytable.innerHTML += display;
      }
    });
};

// let deletePost = (postId) => {
//     const ContactValues = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         'auth-token' : localStorage.getItem('Adminuser')
//       }
//     };

//     fetch(
//       `https://my-portfolio-back-end.herokuapp.com/api/DeleteContact/${postId}`,
//       ContactValues
//     ).then(response => {
//       if (response.status == 200){
//         alert('Deleted Contact Query successfully');
//         return response.json();
//       }
//       if (response.status == 400 || response.status == 401) {
//         alert('Can\'t Delete Contact Query');
//       }
//     });
//       // location.reload();
//   }
