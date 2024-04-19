function openModal(element){
    if(element !== null) {
        element.classList.add('popup_is-opened');
        element.addEventListener('click', handleOutsideClose);
        document.addEventListener('keydown', handleEscapeClose);
    }
};

function closeModal(element){
    if(element != null) {
        element.classList.remove('popup_is-opened');
        element.classList.add('popup_is-animated');
        element.removeEventListener('click', handleOutsideClose);
        document.removeEventListener('keydown', handleEscapeClose);
    }
};

function handleEscapeClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
};

function handleOutsideClose(evt) {
        const isClickInside = !!evt.target.closest('.popup__content');
        const openedPopup = document.querySelector('.popup_is-opened');
        if(!isClickInside) {
        closeModal(openedPopup);
    }
};

export { openModal, closeModal };