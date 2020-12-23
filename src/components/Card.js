

function Card(props) {
  
  const { card, onCardClick } = props

  function handleClick() {
    onCardClick(card);
  }

  return(
    <div className="place-card">
      <div className="place-card__image" 
        style={{backgroundImage: `url(${card.link})`}}
        onClick={handleClick}
        >
        <button className="place-card__delete-icon"></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{card.name}</h3>
        <div className="place-card__like-container">
        <button className="place-card__like-icon"></button>
        <p className="place-card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;