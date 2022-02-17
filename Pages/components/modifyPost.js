let modifyPost = () => {
    view = document.getElementById('dashboard');

    let post = `<!DOCTYPE html>
    <html lang="en">

    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caudex&family=Roboto&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caudex&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aubrey&display=swap" rel="stylesheet">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
           
          .articlebox{
              width: 100%;
              height: 80vh;
              background-color: #dde9f0; 
              margin: auto;
              overflow-y: scroll;
              overflow-x: hidden;
          }
          .newArticle{
              width: 100%;
              background-color: #24A0ED;
              height: 10%;
        
          }
          .newArticle p{
              text-align: center;
              font-size: 20px;
              padding-top: 10px;
              color: white;
              font-family: 'Abel';
          }
          .articleContainer{
              width: 100%;
              height: 30%;
              border:2px solid #264653;
              border-right:none;
              display: flex;
              justify-content:space-between;
          }
          .articleImage{
              width: 25%;
              height: 100%;
              border-radius: 3px;
              
          }
          .titleBodyButtons{
           width: 50%;
          }.save, .delete {
            width: 30%;
            border:none;
          }
          .save{
            background-color:#24A0ED;
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
          }.delete{
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
          .save:hover{
            border-color:#24A0ED;
            background-color: #fff;
            color:#24A0ED;
          }.delete:hover{
              border-color: rgb(204, 46, 46);
            background-color: #fff;
            color:rgb(204, 46, 46);
          }
          .articleBody, .articleTitle{
              width: 100%;
              margin-right:0;
              border: none;
              outline: none;
          }
          .articleBody{
              font-size: 14px;
              font-family:'Abel';
              padding: 5px;
              margin-top:0;
              padding-top:5%;
              border-radius: 10px;
          }
          .articleTitle{
              margin-top:10px;
              outline: 0;
  background: #FFFFFF;
  width: 60%;
  border: 0;
  border-radius: 50px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Abel';
          }
      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox result">
            <div class="newArticle">
                <p>Article List</p>
            </div>
                        <div id="result1"></div>
            <!--end of title-->
         
        </div>
    </body>
    </html>`

    view.innerHTML = `${post}`;


    const postValues = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      fetch("https://my-portfolio-back-end.herokuapp.com/api/Getblog", postValues)
        .then((response) =>{
          return response.json();
        }).then(data => {
          const blogPosts = data.blog;
          console.log('BlogPOsts -------->>>>>>>>', blogPosts);

          let list = document.getElementById('result1');
        
          for(let i =0; i<blogPosts.length; i++) {
            console.log(blogPosts[i]);

                let display = `

                <div class="articleContainer">
                <img src="${blogPosts[i].imgLink}" class="articleImage">
                <div class="titleBodyButtons">
                    <input type="text" class="articleTitle" id='title' placeholder="Blog Title" value="${blogPosts[i].title}"></p>
                    <input type="url" class="articleTitle" id='image'placeholder="Image Link" value="${blogPosts[i].imgLink}"></p>
                    <textarea class="articleBody" id='body'>${blogPosts[i].body}</textarea>
                    <div class="articleBtns">
                        <button type="submit" class="save" id='${blogPosts[i]._id}' onclick="saveChange('${blogPosts[i]._id}')">Save</button>
                        <button type="submit" class="delete" id='${blogPosts[i]._id}' onclick="deletePost('${blogPosts[i]._id}')">Delete</button>
                    </div>
                </div>                
                <div>
                <br/>
                `
                list.innerHTML += display;

          }
        });
}

let saveChange = (postId) => {

    let titleThisArticle = document.getElementById('title').value.trim();
    let imageThisArticle = document.getElementById('image').value.trim();
    let bodyThisArticle = document.getElementById('body').value.trim();

    const PostValues = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'auth-token' : localStorage.getItem('Adminuser')
      },
      body: JSON.stringify({
        Title: titleThisArticle,
        Body: bodyThisArticle,
        ImageLink: imageThisArticle,
      }),
    };

    fetch(
      `https://my-portfolio-back-end.herokuapp.com/api/Updateblog/${postId}`,
      PostValues
    ).then(response => {
      if (response.status == 200){
        alert('Updated blog post successfully');
        return response.json();
      }
      if (response.status == 400 || response.status == 401) {
        alert('Can\'t update blog post');
      }
    });
    
}

let deletePost = (postId) => {
  const PostValues = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      'auth-token' : localStorage.getItem('Adminuser')
    }
  };

  fetch(
    `https://my-portfolio-back-end.herokuapp.com/api/Deleteblog/${postId}`,
    PostValues
  ).then(response => {
    if (response.status == 200){
      alert('Deleted blog post successfully');
      return response.json();
    }
    if (response.status == 400 || response.status == 401) {
      alert('Can\'t Delete blog post');
    }
  });
    // location.reload();
}