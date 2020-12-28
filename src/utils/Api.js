const apiOptions = {
  baseUrl: "https://nomoreparties.co/cohort10",
  token: "623ffd9d-f498-4eee-8946-dfe944c061d5",
};

class Api {
  constructor(options) {
    this.options = options;
  }
  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        authorization: this.options.token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: {
        authorization: this.options.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.status));
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }

  sendUserInfo(userInfo) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.options.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }
  addNewCard(form) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this.options.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }
  deleteCard(cardId) {
    return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.options.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.status));
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this.options.baseUrl}/cards/like/${cardId}`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: {
        authorization: this.options.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.status));
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }

  changeAvatar(avatarValue) {
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.options.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatarValue,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.status));
      })
      .catch((err) => Promise.reject(new Error(err.message)));
  }
}

const api = new Api(apiOptions);

export default api;