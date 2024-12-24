const giftBox = document.querySelector('.gift-box');
const letter = document.querySelector('.letter');
giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    letter.classList.toggle('show');
});
