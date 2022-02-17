let newComment = () => {
  let commentSection = document.getElementById("comment");
  var element = document.getElementById("load");

  let commentValue = commentSection.value.trim();
  if (commentValue === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Comment Can\'t be empty!',
    })
  } else {
    element.classList.add("fa");
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
      element.classList.remove("fa");
      if(response.status == 401 || response.status == 400){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Login Before Commenting!',
        })
        element.classList.remove("fa");
      }
    });
  }

  // }
};
