function UserInfo() {
  return(
    <div className="user-info">
      <div className="user-info__photo" />
      <div className="user-info__data">
        <h1 className="user-info__name">dsfsdf</h1>
        <p className="user-info__job">sdfsdf</p>
        <button className="button user-info__button_type_edit" id="edit">
          Edit
        </button>
      </div>
      <button className="button user-info__button">+</button>
  </div>
  )
}

export default UserInfo;