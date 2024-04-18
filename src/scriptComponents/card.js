// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function createCard (options) {
    const {cardData, deleteCard, addImg, addLike} = options;
    const placeElementCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = placeElementCard.querySelector('.card__title');
    const cardImage = placeElementCard.querySelector('.card__image');
    const cardDeleteButton = placeElementCard.querySelector('.card__delete-button');
    const likeButton = placeElementCard.querySelector('.card__like-button');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    likeButton.addEventListener ('click', function(){
        addLike(likeButton);
    });
    cardDeleteButton.addEventListener ('click', function(){
        deleteCard(placeElementCard);
    });
    cardImage.addEventListener ('click', function(){
        addImg(cardImage.src, cardImage.alt);
    });

    return placeElementCard;
};

// @todo: Функция удаления карточки
function deleteCard (placeElementCard){
    placeElementCard.remove();
};
//@todo: Функция переключения лайка карточки
function switchLike(likeButton) {
    likeButton.classList.toggle("card__like-button_is-active");
};

export {createCard, deleteCard, switchLike};