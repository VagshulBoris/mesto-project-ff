// @todo: Импорты
import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteCard, switchLike} from '../scriptComponents/card.js';
import { openModal, closeModal } from '../scriptComponents/modal.js';
// @todo: DOM узлы
const editPopup = document.querySelector('.popup_type_edit');
const editPopupButton = document.querySelector('.profile__edit-button');
const addPopup = document.querySelector('.popup_type_new-card');
const addPopupButton = document.querySelector('.profile__add-button');
const imgPopup = document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const closeButtons = document.querySelectorAll('.popup__close');
const nameElement = document.querySelector('.profile__title');
const descriptionElement = document.querySelector('.profile__description');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const profileForm = document.forms['edit-profile'];
const placeForm = document.forms['new-place'];
const cardsContainer = document.querySelector('.places__list');

function switchModal(button, popup, Edit = false){
    button.addEventListener('click', function(){
        if(Edit === true){
            fillProfileForm();
        };
        openModal(popup);
    });
};

switchModal(editPopupButton, editPopup, true);
switchModal(addPopupButton, addPopup); 

function fillProfileForm() {
    nameInput.value = nameElement.textContent;
    descriptionInput.value = descriptionElement.textContent;
};

closeButtons.forEach(function(closeButton){
    closeButton.addEventListener('click', function(){
        const popup = closeButton.closest('.popup');
        closeModal(popup);
    });
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const name = nameInput.value;
    const description = descriptionInput.value;
    nameElement.textContent = name;
    descriptionElement.textContent = description;
    closeModal(editPopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

function openImgModal(src, alt){
    popupImage.src = src;
    popupImage.alt = alt;
    popupCaption.textContent = alt;
    openModal(imgPopup);
}

function newPlaceForm(evt) {
    evt.preventDefault();
    const cardInfo = {
        cardData: {
            name: cardNameInput.value,
            link: cardUrlInput.value
        },
        imgAdd : openImgModal,
        deleteCard: deleteCard,
        likeAdd: switchLike
    };
    cardsContainer.prepend(createCard(cardInfo));
    closeModal(addPopup);
    placeForm.reset();
}

placeForm.addEventListener('submit', newPlaceForm);

initialCards.forEach(function(cardData){
    const cardOptions = {
        cardData: cardData,
        deleteCard: deleteCard,
        addLike: switchLike,
        addImg: openImgModal
    }
    cardsContainer.append(createCard(cardOptions));
});
