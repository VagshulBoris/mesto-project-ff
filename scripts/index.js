// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard (cardData, deleteCard) {
    const placeElementCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = placeElementCard.querySelector('.card__title');
    const cardImage = placeElementCard.querySelector('.card__image');
    const cardDeleteButton = placeElementCard.querySelector('.card__delete-button');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardDeleteButton.addEventListener ('click', function(){
        deleteCard(placeElementCard);
    });
    return placeElementCard;
};
// @todo: Функция удаления карточки
function deleteCard (placeElementCard){
    placeElementCard.remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardData){
    cardsContainer.append(createCard(cardData, deleteCard));
});

//// @todo: Темплейт карточки
//const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
//const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
//function addCard (cardItem, cardDelete) {
    //const placeElementCard = cardTemplate.querySelector('.card').cloneNode(true);
    //const cardTitle = placeElementCard.querySelector('.card__title');
    //const cardImage = placeElementCard.querySelector('.card__image');
    //const cardDeleteButton = placeElementCard.querySelector('.card__delete-button');
    //cardTitle.textContent = cardItem.name;
    //cardImage.src = cardItem.link;
    //cardImage.alt = cardItem.name;
   // cardDeleteButton.addEventListener ('click', function(){
    //    cardDelete(placeElementCard);
    //});
    //return placeElementCard;
//};
// @todo: Функция удаления карточки
//function cardDelete (placeElementCard){
    //placeElementCard.remove();
//};
// @todo: Вывести карточки на страницу
//initialCards.forEach(function(cardItem){
   // placesList.append(addCard(cardItem, cardDelete));
//});
