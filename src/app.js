const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

document.addEventListener('DOMContentLoaded', function() {
    const collapsibleElements = document.getElementsByClassName('collapsible');

    for (let i = 0; i < collapsibleElements.length; i++) {
        collapsibleElements[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display !== 'block') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }
});


