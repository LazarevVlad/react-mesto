import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const { isOpen, onClose, onUpdateCards } = props;

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleAddName(e) {
    setName(e.target.value)
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateCards({
      name,
      link
    });
  }

  return (
    <PopupWithForm 
      isOpen={isOpen}
      title='Новое место'
      name='new'
      onClose={onClose}
      onSubmit={handleSubmit}
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
              onChange={handleAddName}
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
              onChange={handleAddLink}
            />
            <span id="error-url" className="error-message"></span>
          </div>
          <button
            className="button popup__button popup__button_type_new"
          >
            +
          </button>
        </>
      )}
    />
  )
}

export default AddPlacePopup;