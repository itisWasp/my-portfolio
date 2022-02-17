let ViewPost = () =>{
    let output = document.getElementById('output');
    var element = document.getElementById("loadingPage");

    const postValues = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const postId = JSON.parse(localStorage.getItem('currentPost'))
      fetch(`https://my-portfolio-back-end.herokuapp.com/api/Getblog/${postId}`, postValues)
        .then((response) =>{
          return response.json();
        }).then(post => {
            console.log('The current Post ------->>>>>>>>', post);
                //
                let singlePost = `
    
                    <style>
                    body{
                        font-family: 'Ubuntu', sans-serif;
                    } 
                    
                    .topnav {
                        overflow: hidden;
                        background-color: #264653;
                        filter: drop-shadow(0px 1.5px 2px #000000c5);
                        }
                    
                    .topnav a {
                        float: left;
                        color: white;
                        text-align: center;
                        padding: 14px 16px;
                        text-decoration: none;
                        font-size: 30px;
                        font-family: 'Ubuntu', sans-serif;
                        
                    }
                    
                    .topnav a.blog {
                        float: right;
                        margin-left: 20px;
                        color: black;
                    }
                    
                    .button {
                        float: right;
                        border: none;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 10px 10px;
                        cursor: pointer;
                    }
                        
                    .button2 {
                        border-radius: 50px; 
                        color: white;
                        background: #24A0ED;
                        font-weight: bold;
                        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                        color:#fff;
                        cursor:pointer;
                        border:2px solid transparent;
                        transition: all 0.4s ease;
                    }
                    
                    .button2:hover{
                        border-color:#24A0ED;
                        background-color: #fff;
                        color:#24A0ED;
                    }
                    
                    .img1{
                        float: right;
                        
                    }
                    
                    *{
                        box-sizing: border-box;
                        }
                        
                        /* Add a gray background color with some padding */
                        body {      
                        font-family: 'Roboto';
                        padding: 20px;
                        background: #DDDDDD;
                        }
                        
                        /* Header/Blog Title */
                        .header {
                        padding: 30px;
                        font-size: 40px;
                        text-align: center;
                        background: #264653;
                        }
                        
                        /* Create two unequal columns that floats next to each other */
                        /* Left column */
                        .leftcolumn {   
                        float: left;
                        width: 75%;
                        }
                        
                        /* Right column */
                        .rightcolumn {
                        float: left;
                        width: 25%;
                        padding-left: 20px;
                        }
                        
                        /* Fake image */
                        .fakeimg {
                        background-color: #aaa;
                        width: 100%;
                        padding: 20px;
                        }
                        
                        /* Add a card effect for articles */
                        .card {
                        background-color: #264653;
                        padding: 20px;
                        margin-top: 20px;
                        color: #ffffff;
                        }
                        
                        /* Clear floats after the columns */
                        .row:after {
                        content: "";
                        display: table;
                        clear: both;
                        }
                        
                        /* Footer */
                        .footer {
                        padding: 20px;
                        text-align: center;
                        background: #264653;
                        margin-top: 20px;
                        color: #ffffff;
                        
                        }
                    /*Subscribe Follow Me Area*/
                    .form {
                        position: relative;
                        z-index: 1;
                        background: #FFFFFF;
                        border-radius: 20px;
                        max-width: 100%;/*360px*/
                        padding: 45px;
                        text-align: center;
                    }
                    
                    .form input {
                        outline: 0;
                        background: #ddd;
                        width: 40%;
                        border: 0;
                        border-radius: 50px;
                        margin: 0 -40px 20px;
                        padding: 10px;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-family: 'Abel';
                    }
                    
                    .form input:focus {
                        background: #dbdbdb;
                    }
                    
                    .form button {
                        font-family: 'Abel';
                        outline: 0;
                        background: #24A0ED;
                        width: 100%;
                        border: 0;
                        border-radius: 50px;
                        padding: 10px;
                        color: #FFFFFF;
                        font-size: 16px;
                        -webkit-transition: all 0.3 ease;
                        transition: all 0.3 ease;
                        cursor: pointer;
                    }
                    
                    .form button:active {
                        background: #395591;
                    }
                    
                    .form span {
                        font-size: 75px;
                        color: #4b6cb7;
                    }

                    .fakeimg img{
                        height:100%;
                width:100%;
                object-fit: cover;
                border-radius: 12px;

                    }
                    .fab{
                        height:100%;
                    }
                        
                        /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
                        @media screen and (max-width: 800px) {
                        .leftcolumn, .rightcolumn {   
                            width: 100%;
                            padding: 0;
                        }
                        }
                    </style>
                    
                    
                    <!DOCTYPE html>

                    <head>
                        <title>My Blog</title>
                        <link rel="stylesheet" href="story.css">
                    
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                    
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
                    
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">

                        <!-- Fontawesome CDN Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
                        <script src="../components/header.js"></script>
                        <script src="../components/footer.js"></script>
                        </head>
                        
                        <div class="card">
                        <h2>${post.title}</h2>
                        <h5>${post.date}</h5>
                        <div class="fakeimg" style="height:200px;"> <img src="${post.imgLink}" alt="featured image" class="img5"> </div>
                        <i class="fab fa-gratipay"style="font-size:48px; cursor: pointer;" id='${post._id}' onclick="like('${post._id}')"></i> ${post.likes.length}
                        <p>${post.body}</p>
                        </div>
                    
                    </html>`
                    output.innerHTML = singlePost;
                    element.classList.remove("loader");
                })
        }


// let newComment = (postId) => {
//     let test = document.getElementById(postId);

//     console.log(postId);

//     let commentSection = document.getElementById('comment');
//     let commentValue = commentSection.value.trim();
//       if (commentValue === '') {
//           alert('Comment Can\'t be empty');
//       }
//       else{
//         let time = new Date().toLocaleString();
//         let commentValue = commentSection.value.trim();
//         let type = `comment`;

//         let formData = JSON.parse(localStorage.getItem(postId)) || [];

//         console.log(formData);

//         // formData.push({ commentValue, time, type});
//         localStorage.setItem(postId, JSON.stringify(formData));
    
//         // localStorage.setItem(postId, JSON.stringify(commentPosts));  
//         alert('Post Created Successfully');


    // test.addEventListener('click', (e) => {
    //     if(e.detail === 1){
            // console.log('Single Click');
            // console.log(postId);
            // let item = JSON.parse(localStorage.getItem(postId));
            // // console.log(item);
            // let likeAdd = item.likes + 1;
            // console.log(likeAdd);

            // let arr = JSON.parse(localStorage.getItem('currentPost'));
            // let title = arr.titleInfo;
            // let body = arr.fullArticleInfo;
            // let image = arr.imgUrlInfo;
            // let type = arr.type;
            // let comments = arr.comments;

            // let blogPosts = {
            //     titleInfo: title,
            //     fullArticleInfo: body,
            //     imgUrlInfo: image,
            //     type:`${type}`,
            //     comments: comments,
            //     likes: likeAdd
            // }
            // localStorage.setItem(postId, JSON.stringify(blogPosts));
    //     }
    //     else{
    //         console.log('Double Click');
    //     }
    // });
    
// }


let like = (postId) => {
    
    const CommentValues = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          'auth-token' : localStorage.getItem('user')
        },
      };

      fetch(
        `https://my-portfolio-back-end.herokuapp.com/api/like/${postId}`,
        CommentValues
      ).then((response) => {
          return response.json()
      }).then(data => {
          if(data.msg === 'Invalid Token'){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'PLease Login Before Liking!',
              })
          }
          if(data.msg === 'Post Already Liked') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Post Already Liked!',
              })
          }
      })


    
}