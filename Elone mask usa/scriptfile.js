window.addEventListener('scroll',function () {
    let navbar = this.document.getElementById("#navbar");
    if (window.pageYOFFset >= 10) {
        navbar.classList.add('skicky');
    }
});