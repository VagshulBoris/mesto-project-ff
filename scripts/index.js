// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard (cardItem, cardDelete) {
    const placeElementCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = placeElementCard.querySelector('.card__title');
    const cardImage = placeElementCard.querySelector('.card__image');
    const cardDeleteButton = placeElementCard.querySelector('.card__delete-button');
    cardTitle.textContent = cardItem.name;
    cardImage.src = cardItem.link;
    cardDeleteButton.addEventListener ('click', function(){
        cardDelete(placeElementCard);
    });
    return placeElementCard;
};
// @todo: Функция удаления карточки
function cardDelete (placeElementCard){
    placeElementCard.remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardItem){
    placesList.append(addCard(cardItem, cardDelete));
});
