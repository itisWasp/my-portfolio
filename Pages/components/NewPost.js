    let newPost = () =>{
    let board = document.getElementById("dashboard");
    post = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
        
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .articlebox{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
              margin: auto;
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
          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
              font-family: 'Abel';
              font-size:16px;
              font-weight: bold;
              outline: 0;
  background: #FFFFFF;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Abel';
  color: Black;
          }.cen2{
            margin-left: 30%;
            width: 50%;
            margin-bottom: 5px;
            font-family: 'Abel';
            font-size:16px;
            font-weight: bold;
            outline: 0;
background: #ddd;
border: 0;
border-radius: 10px;
padding: 10px;
box-sizing: border-box;
font-size: 14px;
font-family: 'Abel';
        }
          .cen1{
            margin-left: 30%;
            width: 50%;
            margin-bottom: 5px;
            font-family: 'Abel';
            font-size:16px;
            font-weight: bold;
            outline: 0;
            color:black;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
              font-family: 'Abel';
              font-weight: bold;
            outline: 0;
            background: #24A0ED;
            
            border: 0;
            border-radius: 50px;
            padding: 10px;
            color: #FFFFFF;
            font-size: 16px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
          }
          btn1:hover{
            border-color:#24A0ED;
            background-color: #fff;
            color:#24A0ED;
          }

          .form-field {
            display: flex;
            flex-direction: column;
          }
          
          .form-field input {
            border: 2px solid #f0f0f0;
          border-radius: 12px;
          display: flex;
          font-size: 18px;
          padding: 10px;
          width: 50%;
          }
          
          .form-field input:focus {
            outline: 0;
          }
          
          .form-field.success input {
            border-color: #09c372;
          }
          
          .form-field.error input {
            border-color: #ff3860;
          }


          .form-field textarea {
            border: 2px solid #f0f0f0;
          border-radius: 12px;
          display: flex;
          font-size: 18px;
          padding: 10px;
          width: 50%;
          }
          
          .form-field textarea:focus {
            outline: 0;
          }
          
          .form-field.success textarea {
            border-color: #09c372;
          }
          
          .form-field.error textarea {
            border-color: #ff3860;
            }
          
          .form-field .error {
            color: #ff3860;
            height: 13px;
            text-align: center;
            margin-left:10px;
            font-size: 14px;
            font-weight: bold;
            font-family: 'Abel';
          }
          
          .message {
            color: #09c372;
            font-size: 15px;
            height: 13px;
            text-align: center;
            font-size: 15px;
            padding-top: 10px;
            font-weight: bold;
            font-family: 'Abel';
          }
          
      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox">
            <div class="newArticle">
                <p>Post new article</p>
            </div>
            <!--end of title-->
            <form action="#" method="get" id="post">
            <div class="form-field">
                <label for="title" class="cen1">Title:</label> <br/>
                <input type="text" name="title" id="title" class="cen"><br/>
                <div class="error"></div><br/>
                </div>

                <div class="form-field">
                <label for="body" class="cen1">Full Article:</label><br/>
                <textarea name="fullart" id="fullart" cols="30" rows="5" class="cen"></textarea><br/>
                <div class="error"></div><br/>
                </div>
                
                <label for="photo" class="cen1">Link of featured image:</label><br/><br/>
                <input type="url" id="imageLink" class="cen" required>
                <!--<textarea name="fullart" id="imageLink" cols="10" rows="1" class="cen"></textarea><br/>-->
                <!--<input type="file" id="myFile" name="filename" class="cen2"><br/><br/>-->
                <input type="submit" value="POST" class="btn1">
                <div class="message"></div>
                
            </form>
        </div>
        
    </body>
    </html>`;
    board.innerHTML = `${post}`;


    let message = document.querySelector('.message');
    const title = document.querySelector('#title');
    const fullArticle = document.querySelector('#fullart');
    const imageLink = document.querySelector('#imageLink');
    const form = document.querySelector('#post');


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



    


    const checkTitle = () => {
      let valid = false;
      const titleValue = title.value.trim();
      if(titleValue === '') {
          setError(title, 'Title is required');
      } else {
          setSuccess(title);
          valid = true;
      }
      return valid;
  }


  const checkArticle = () => {
      let valid = false;
      const articleValue = fullArticle.value.trim();
      if(articleValue === '') {
          setError(fullArticle, 'Article Content is required');
      } else {
          setSuccess(fullArticle);
          valid = true;
      }
      return valid;
  }

  //check Local Storage

  // let Postsblog = JSON.parse(localStorage.getItem('blogPosts'));

  // console.log(Postsblog.title);

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      let titleIsValid = checkTitle();
      let articleIsValid = checkArticle();

      let isFormValid = titleIsValid && articleIsValid;

      if(isFormValid) {
        
        if(window.localStorage){

                    //key generator

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

            let postTitle = title.value.trim();
            let postBody = fullArticle.value.trim();
            let postImageLink = imageLink.value.trim();
            let time = new Date().toLocaleString();
        
            let blogPosts = {
                titleInfo: postTitle,
                fullArticleInfo: postBody,
                imgUrlInfo: postImageLink,
                timeStamp: time,
                type:`posts`,
                likes:0
            }
        
            localStorage.setItem(key, JSON.stringify(blogPosts));        
          
          message.innerHTML = 'Post Created Successfully......';

        }

        else{
            console.log('Unsupported....');
        }
      }
  });
}