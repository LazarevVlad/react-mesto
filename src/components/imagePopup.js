import close from '../images/close.svg';

function ImagePopup(props) {

  return(
    <div className={`popup popup_type_img ${props.isOpen ? 'popup_is-opened' : ''}` }>
      <div className="popup__content popup__content_image">
        <img
          src={close}
          alt=""
          className="popup__close popup__img_close"
          onClick={props.onClose}
        />
        <img alt="" className="popup__img-open" src={props.link} />
      </div>
    </div>
  )
}

export default ImagePopup;