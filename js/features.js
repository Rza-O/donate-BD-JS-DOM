// Navbar transparency feature
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('nav');
    if(this.window.scrollY > 200){
        navbar.classList.remove('bg-secondary')
    }
    else{
        navbar.classList.add('bg-secondary');
    }
    return
})

// Show History Tab
