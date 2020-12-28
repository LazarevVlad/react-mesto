import close from '../images/close.svg';

function PopUpWithForm(props) {

  const { name, isOpen, onClose, title, onSubmit, children } = props;

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
        <div className="popup__content">
          <img
            src={close}
            alt=""
            className="popup__close"
            onClick={onClose}
          />
          <h3 className="popup__title">{title}</h3>
          <form className="popup__form" onSubmit={onSubmit} name={name} noValidate >
            {children}
          </form>
        </div>
      </div>
  ) 
}

export default PopUpWithForm;