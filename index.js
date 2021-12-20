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