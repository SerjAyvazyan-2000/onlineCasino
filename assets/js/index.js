

document.addEventListener('DOMContentLoaded', () => {
    const langBlock = document.querySelector('.lang-block.au');
    const langContainer = document.querySelector('.lang-container');
    const closeBtn = document.querySelector('.close-lang');
    const langList = document.querySelector('.lang-list');

    langBlock.addEventListener('click', () => {
        langContainer.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        langContainer.classList.remove('active');
    });
    langContainer.addEventListener('click', (e) => {
        if (!langList.contains(e.target)) {
            langContainer.classList.remove('active');
        }
    });

});