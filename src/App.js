import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
// import Card from './components/Card';
import ImagePopup from './components/ImagePopup';
import api from './utils/Api';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import EditProfilePopup from './components/EditProfilePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    link: '',
  });

  const [currentUser, setCurrentUser] = useState({})

  const [cards, setCards] = useState([]);


  // получение данных пользователя

  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
  }, [])

  // получение данных карточек

  useEffect(() => {

    api.getInitialCards()
    .then((cardData) => {
      setCards(cardData);
    })
  }, [])

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleEditClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleCardClick (card) {
    const { link } = card;
    setSelectedCard({isOpen: true, link});
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      link: '',
    });
  }

  function handleUpdateUser(userData) {
    api.sendUserInfo(userData)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newsCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newsCards)
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((c) => c !== card))
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header/>
          <div className="profile root__section">
            <Main 
            onEditProfile={handleEditClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleAvatarClick}
            onCardClick={handleCardClick}
            onCardsLike={handleCardLike}
            onCardsDelete={handleCardDelete}
            cards={cards}
            />
          </div>

          <ImagePopup
            isOpen={selectedCard.isOpen}
            link={selectedCard.link}
            onClose={closeAllPopups}
          />

          <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          ></EditProfilePopup>

          {/* <PopupWithForm 
            isOpen={isEditProfilePopupOpen}
            title='Редактировать профиль'
            name='edit'
            onClose={closeAllPopups}
            children={(
            <>
              <div className="input-container">
                <input
                  id="username"
                  type="text"
                  name="name_edit"
                  className="popup__input popup__input_type_name"
                  placeholder="Имя"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span id="error-username" className="error-message"></span>
              </div>
              <div className="input-container">
                <input
                  id="job"
                  type="text"
                  name="job"
                  className="popup__input popup__input_type_link-url"
                  placeholder="О себе"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span id="error-job" className="error-message"></span>
              </div>
              <button className="button popup__button popup__button_type_edit">
                Сохранить
              </button>
            </>
          )}
          /> */}

          <PopupWithForm 
            isOpen={isAddPlacePopupOpen}
            title='Новое место'
            name='new'
            onClose={closeAllPopups}
            children={(
              <>
                <div className="input-container">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="popup__input popup__input_type_name"
                  placeholder="Название"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span id="error-name" className="error-message"></span>
              </div>
              <div className="input-container">
                <input
                  id="url"
                  type="url"
                  name="link"
                  className="popup__input popup__input_type_link-url"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span id="error-url" className="error-message"></span>
              </div>
              <button
                
                className="button popup__button popup__button_type_new"
                disabled
              >
                +
              </button>
              </>
            )}
          />

          <PopupWithForm isOpen={isEditAvatarPopupOpen}
            title='Обновить аватар'
            name='avatar'
            onClose={closeAllPopups}
            children={(
              <>
                <div className="input-container">
                <input
                  id="username"
                  type="text"
                  name="name_edit"
                  className="popup__input popup__input_type_name"
                  placeholder="Имя"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span id="error-username" className="error-message"></span>
              </div>
              <div className="input-container">
                <input
                  id="job"
                  type="text"
                  name="job"
                  className="popup__input popup__input_type_link-url"
                  placeholder="О себе"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span id="error-job" className="error-message"></span>
              </div>
              <button className="button popup__button popup__button_type_edit">
                Сохранить
              </button>
              </>
            )}
          />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
