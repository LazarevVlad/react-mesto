import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const { card, onCardClick, onCardsLike, onCardsDelete } = props


  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardsLike(card);
  }

  function handleDelete() {
    onCardsDelete(card)
  }

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `place-card__delete-icon ${isOwn ? 'place-card__delete-icon_visible' : 'place-card__delete-icon_hidden'}`
  );

  const cardLikeButtonClassName = (
    `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : 'place-card__like-icon_none'}`
  ); 

  return(
    <div className="place-card">
      <button className={cardDeleteButtonClassName} onClick={handleDelete}></button>
      <div className="place-card__image" 
        style={{backgroundImage: `url(${card.link})`}}
        onClick={handleClick}
        />
      <div className="place-card__description">
        <h3 className="place-card__name">{card.name}</h3>
        <div className="place-card__like-container">
        <button className={cardLikeButtonClassName} 
        onClick={handleLike}
        ></button>
        <p className="place-card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;