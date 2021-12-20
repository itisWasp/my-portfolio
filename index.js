scrollTo = (element) =>{
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
    });

    console
}

document.getElementById("first").addEventListener('click', () => {
    scrollTo(document.getElementById('services'));
});

document.getElementById("second").addEventListener('click', () => {
    scrollTo(document.getElementById('secondary'));
});

document.getElementById('third').addEventListener('click', () => {
    scrollTo(document.getElementById('project'));
});

document.getElementById('fourth').addEventListener('click', () => {
    scrollTo(document.getElementById('contact'));
});

document.getElementById('rout').addEventListener('click', () => {
    scrollTo(document.getElementById('contact'));
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}