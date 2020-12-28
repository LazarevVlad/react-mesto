import React, { useEffect, useState } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const { cards, onCardClick, onCardsLike, onCardsDelete } = props;

  const currentUser = React.useContext(CurrentUserContext);

  return(
    <div className="main">
      <div className="profile root__section">

        <div className="user-info">
          <div className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={props.onEditAvatar} />
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser.name}</h1>
            <p className="user-info__job">{currentUser.about}</p>
            <button className="button user-info__button_type_edit" id="edit" onClick={props.onEditProfile}>
              Edit
            </button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>

      </div>

      <div className="places-list root__section">
        {cards.map((card) => 
          <Card
          onCardClick={onCardClick}
          onCardsLike={onCardsLike}
          onCardsDelete={onCardsDelete}
          key={card._id}
          card={card}
        />)}
      </div>
    </div>
  )
}

export default Main;