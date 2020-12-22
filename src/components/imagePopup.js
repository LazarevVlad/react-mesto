import close from '../images/close.svg';

function imagePopup() {

  return(
    <div class="popup popup_img">
      <div class="popup__content popup__content_image">
        <img
          src={close}
          alt=""
         class="popup__close popup__img_close"
        />
        <img alt="" class="popup__img-open" />
      </div>
    </div>
  )
}

export default imagePopup;