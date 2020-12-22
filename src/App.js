import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import Card from './components/Card';
import api from './utils/Api';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(false);

  const [cards, setCards] = useState([]);

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

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
      <Header/>
        <div className="profile root__section">
          <Main 
          onEditProfile={handleEditClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleAvatarClick}
          />
        </div>

        <div className="places-list root__section">
          {cards.map((card) => 
          <Card 
          key={card._id}
          link={card.link}
          name={card.name}
          likes={card.likes}
          />)}
        </div>

        <PopupWithForm isOpen={isEditProfilePopupOpen}
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
        />

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
  );
}

export default App;
