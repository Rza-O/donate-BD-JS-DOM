// Navbar transparency
// classes to add on navbar:  fixed backdrop-blur-sm top-0 left-0 right-0
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('nav');
    if(this.window.scrollY > 200){
        // navbar.classList.add('fixed', 'backdrop-blur-sm', 'top-0', 'left-0', 'right-0' );
        navbar.classList.remove('bg-secondary')
    }
    else{
        navbar.classList.add('bg-secondary');
    }
    return
})