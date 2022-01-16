    let newPost = () =>{
    let board = document.getElementById("dashboard");
    post = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
        <link rel="stylesheet" href="Pages/Main-Page/index.css">
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
              background-color: #ddd;
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
          }.cen1{
            margin-left: 30%;
            width: 50%;
            margin-bottom: 5px;
            font-family: 'Abel';
            font-size:16px;
            font-weight: bold;
            outline: 0;
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
          
      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox">
            <div class="newArticle">
                <p>Post new article</p>
            </div>
            <!--end of title-->
            <form action="#" method="get">
                <label for="title" class="cen1">Title:</label> <br/>
                <input type="text" name="title" id="title" class="cen" required><br/>
                <label for="body" class="cen1">Full Article:</label><br/>
                <textarea name="fullart" id="fullart" cols="30" rows="5" class="cen" required></textarea><br/>
                <label for="photo" class="cen1">Upload featured image:</label><br/><br/>
                <input type="file" id="myFile" name="filename" class="cen"><br/><br/>   
                <input type="submit" value="POST" class="btn1">
            </form>
        </div>
        
    </body>
    </html>`;
    board.innerHTML = `${post}`;
}