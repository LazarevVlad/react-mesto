import close from '../images/close.svg';

function PopUpWithForm(props) {

  return(
    <div className={`popup popup_type_${props.name}`}>
        <div className="popup__content">
          <img
            src={close}
            alt=""
            className="popup__close"
            onClick={closeAddPlaceClick}
          />
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" name={props.name}noValidate>
            {props.children}
            {/* <div className="input-container">
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
              type
              className="button popup__button popup__button_type_new"
              disabled
            >
              +
            </button> */}
          </form>
        </div>
      </div>
  ) 
}

export default PopUpWithForm;