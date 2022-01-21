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


    for(let i =0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        if(key === 'email' || key === 'password'){
            continue;
        }
        else{
            let list = document.getElementById('result1');
            let arr = JSON.parse(localStorage.getItem(key));
            let title = arr.titleInfo;
            let body = arr.fullArticleInfo;
            let image = arr.imgUrlInfo;
            let type = arr.type;
            if(type == `posts`){
                let display = `

                <div class="articleContainer">
                <img src="${image}" class="articleImage">
                <div class="titleBodyButtons">
                    <input type="text" class="articleTitle" id='title' placeholder="Blog Title" value="${title}"></p>
                    <input type="url" class="articleTitle" id='image'placeholder="Image Link" value="${image}"></p>
                    <textarea class="articleBody" id='body'>${body}</textarea>
                    <div class="articleBtns">
                        <button type="submit" class="save" id='${key}' onclick="saveChange('${key}')">Save</button>
                        <button type="submit" class="delete" id='${key}' onclick="deletePost('${key}')">Delete</button>
                    </div>
                </div>                
                <div>
                <br/>
                `
                list.innerHTML += display;
            }
        }
    }
}

let saveChange = (postId) => {
    let item = JSON.parse(localStorage.getItem(postId));
    console.log(item);
    let titleLocalStorage = item.titleInfo;
    let imageLocalStorage = item.imgUrlInfo;
    let bodyLocalStorage = item.fullArticleInfo;

    let titleThisArticle = document.getElementById('title').value.trim();
    let imageThisArticle = document.getElementById('image').value.trim();
    let bodyThisArticle = document.getElementById('body').value.trim();

    // if(titleThisArticle === titleLocalStorage){
    //     continue;
    // }
    if(titleThisArticle !== titleLocalStorage){
        let blogPosts = {
            titleInfo: titleThisArticle,
            fullArticleInfo: bodyLocalStorage,
            imgUrlInfo: imageLocalStorage,
            type:`posts`
        }
        localStorage.setItem(postId, JSON.stringify(blogPosts));
        location.reload();
        alert('Saved Successfully');
    }

    else if(imageThisArticle !== imageLocalStorage){
        let blogPosts = {
            titleInfo: titleLocalStorage,
            fullArticleInfo: bodyLocalStorage,
            imgUrlInfo: imageThisArticle,
            type:`posts`
        }
        localStorage.setItem(postId, JSON.stringify(blogPosts));
        location.reload();
        alert('Saved Successfully');
    }

    else if(bodyThisArticle !== bodyLocalStorage){
        let blogPosts = {
            titleInfo: titleLocalStorage,
            fullArticleInfo: bodyThisArticle,
            imgUrlInfo: imageLocalStorage,
            type:`posts`
        }
        localStorage.setItem(postId, JSON.stringify(blogPosts));
        location.reload();
        alert('Saved Successfully');
    }

    else{
        alert('No Changes Made...');
        location.reload();
    }
    
}

let deletePost = (postId) => {
    // console.log('Test');
    localStorage.removeItem(postId);
    location.reload();
}