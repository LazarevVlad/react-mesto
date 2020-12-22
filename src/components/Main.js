import React, { useState, useEffect } from 'react';
import api from '../utils/Api';

function Main(props) {

  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  
  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  }, [])

  return(
    <>
      <div className="profile root__section">

        <div className="user-info">
          <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar} />
          <div className="user-info__data">
            <h1 className="user-info__name">{userName}</h1>
            <p className="user-info__job">{userDescription}</p>
            <button className="button user-info__button_type_edit" id="edit" onClick={props.onEditProfile}>
              Edit
            </button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>

      </div>
    </>
  )
}

export default Main;