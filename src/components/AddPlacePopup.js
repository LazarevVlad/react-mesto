import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const { isOpen, onClose } = props;

  return (
    <PopupWithForm 
      isOpen={isOpen}
      title='Новое место'
      name='new'
      onClose={onClose}
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
  )
}

export default AddPlacePopup;