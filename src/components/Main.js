import close from '../images/close.svg';

function Main() {

  function handleAddPlaceClick() {
    document.querySelector('.popup').classList.add('popup_is-opened')
  }

  function closeAddPlaceClick() {
    document.querySelector('.popup').classList.remove('popup_is-opened')
  }

  function handleEditClick() {
    document.querySelector('.popup_edit').classList.add('popup_is-opened')
  }

  function closeEditClick() {
    document.querySelector('.popup_edit').classList.remove('popup_is-opened')
  }

  function handleAvatarClick() {
    document.querySelector('.popup_edit').classList.add('popup_is-opened')
  }

  function closeAvatarClick() {
    document.querySelector('.popup_edit').classList.remove('popup_is-opened')
  }

  return(
    <div className="main__section">

    <div className="user-info">
      <div className="user-info__photo"  onClick={handleAvatarClick} />
      <div className="user-info__data">
        <h1 className="user-info__name">dsfsdf</h1>
        <p className="user-info__job">sdfsdf</p>
        <button className="button user-info__button_type_edit" id="edit" onClick={handleAddPlaceClick}>
          Edit
        </button>
      </div>
      <button className="button user-info__button" onClick={handleEditClick}>+</button>
    </div>

      <div className="popup">
        <div className="popup__content">
          <img
            src={close}
            alt=""
            className="popup__close"
            onClick={closeAddPlaceClick}
          />
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="new" noValidate>
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
              type
              className="button popup__button popup__button_type_new"
              disabled
            >
              +
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_edit">
        <div className="popup__content">
          <img
            src={close}
            alt=""
            className="popup__close popup__close_edit"
            onClick={closeEditClick}
          />
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="edit" noValidate>
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
            <button type className="button popup__button popup__button_type_edit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__content">
          <img
            src={close}
            alt=""
            className="popup__close popup__close_edit"
            onClick={closeAvatarClick}
          />
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="avatar" noValidate>
            <div className="input-container">
              <input
                id="avatar"
                type="url"
                name="avatarLink"
                className="popup__input popup__input_type_avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span id="error-avatar" className="error-message"></span>
            </div>
            <button type className="button popup__button popup__button_type_avatar">
              Сохранить
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Main;