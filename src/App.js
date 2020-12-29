import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Card from './components/Card';
import ImagePopup from './components/ImagePopup';
import api from './utils/Api';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup'

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

  function handleUpdateAvatar(userData) {
    api.changeAvatar(userData)
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
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
