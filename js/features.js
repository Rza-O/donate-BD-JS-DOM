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
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function () {

    historyTab.classList.add('bg-primary');
    donationTab.classList.remove('bg-primary');

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

// SHow Donation history
donationTab.addEventListener('click', function () {

    donationTab.classList.add('bg-primary');
    historyTab.classList.remove('bg-primary');

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
