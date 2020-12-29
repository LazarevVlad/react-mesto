import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

  // const currentUser = React.useContext(CurrentUserContext);
  
  const { isOpen, onClose, onUpdateAvatar } = props;

  // const [avatar, setAvatar] = useState(null);

  const inputRef = useRef('');

  // useEffect(() => {

  // })

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  } 

  return (
    <PopupWithForm isOpen={isOpen}
            title='Обновить аватар'
            name='avatar'
            onClose={onClose}
            onSubmit={handleSubmit}
            children={(
              <>
                <div className="input-container">
                  <input
                    ref={inputRef}
                    id="avatar"
                    type="url"
                    name="avatarLink"
                    className="popup__input popup__input_type_avatar"
                    placeholder="Ссылка на аватар"
                    required
                  />
                  <span id="error-avatar" className="error-message"></span>
                </div>
                <button className="button popup__button popup__button_type_avatar">
                  Сохранить
                </button>
              </>
            )}
          />
  )
}

export default EditAvatarPopup;