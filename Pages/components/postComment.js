let newComment = () => {
  let commentSection = document.getElementById("comment");

  let commentValue = commentSection.value.trim();
  if (commentValue === "") {
    alert("Comment Can't be empty");
  } else {
    const CommentValues = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'auth-token' : localStorage.getItem('user')
      },
      body: JSON.stringify({
        Comment: commentSection.value,
      }),
    };

    currentPost = JSON.parse(localStorage.getItem("currentPost"));

    fetch(
      `https://my-portfolio-back-end.herokuapp.com/api/comment/${currentPost}`,
      CommentValues
    ).then((response) => {
      if(response.status == 401 || response.status == 400){
        alert('Please Login Before Commenting')
      }
    });
  }

  // }
};
