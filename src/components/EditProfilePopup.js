import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const { isOpen, onClose, onUpdateUser } = props;

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeNameDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm 
            isOpen={isOpen}
            title='Редактировать профиль'
            name='edit'
            onClose={onClose}
            onSubmit={handleSubmit}
            children={(
            <>
              <div className="input-container">
                <input
                  value={name}
                  onChange={handleChangeName}
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
                  value={description}
                  onChange={handleChangeNameDescription}
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
  )
}

export default EditProfilePopup;