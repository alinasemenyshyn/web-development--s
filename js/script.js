const burgerButton = document.querySelector('.burger-nav');
const menuWindow = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const heart = document.querySelector('.heart-icon');
const filterButtons = document.querySelectorAll('.filter-btn');
const allCards = document.querySelectorAll('.card');

burgerButton.addEventListener('click', function() {
    menuWindow.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});

heart.addEventListener('click', function() {
    heart.classList.toggle('liked');
});

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.dataset.filter; 
        
        allCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hidden'); 
            } else {
                card.classList.add('hidden'); 
            }
        });
    });
});