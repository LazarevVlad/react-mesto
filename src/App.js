import Header from './components/Header';
// import UserInfo from './components/UserInfo';
import Main from './components/Main';

function App() {

  let isEditProfilePopupOpen = false;
  let isAddPlacePopupOpen = false;
  let isEditAvatarPopupOpen = false;

  function handleAddPlaceClick() {
    let isAddPlacePopupOpen = true;
  }
  function handleEditClick() {
    let isEditProfilePopupOpen = true;
  }
  function handleAvatarClick() {
    let isEditAvatarPopupOpen = true;
  }

  return (
    <div className="App">
      <Header/>
        <div className="profile main__section">
          <Main onEditProfile={handleEditClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarClick}/>
        </div>
    </div>
  );
}

export default App;
