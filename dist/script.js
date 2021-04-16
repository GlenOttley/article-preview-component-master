const cardShareButton = document.querySelector('.card__share-btn');
const cardShareImg = document.querySelector('.card__share-img');
const cardAuthor = document.querySelector('.card__author');
const cardAuthorInfo = document.querySelector('.card__author-info');
const cardShareIcons = document.querySelector('.card__share-icons');
const cardShareDesktop = document.querySelector('.card__share-desktop');
const cardShareText = document.querySelector('.card__share-text');

cardShareButton.addEventListener('click', event => {
		cardAuthorInfo.classList.toggle('card__author-info--hidden');
		cardAuthor.classList.toggle('card__author--active');
		cardShareIcons.classList.toggle('card__share-icons--hidden');
		cardShareButton.classList.toggle('card__share-btn--active');
		cardShareImg.classList.toggle('card__share-img--active');
		cardShareDesktop.classList.toggle('card__share-desktop--hidden');
	})