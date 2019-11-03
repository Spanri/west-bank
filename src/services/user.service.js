import config from '@/config';

/**
 * здесь есть функции login и getAll, бекендерам нужно настроить их
 */

export const userService = {
  login,
  logout,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify({ username, password, }),
  };

  requestOptions; // убрать при не фейке
  config.apiUrl;

  // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
  //   .then(handleResponse)
  //   .then(user => {
  //     if (user.token) {
  //       localStorage.setItem('user', JSON.stringify(user));
  //     }

  //     return user;
  //   });

  let user = {
    photo: '', // как хранить медиа?
    firstName: 'Иванов',
    lastName: 'Иван',
    patronymic: 'Иванович',
    phone: '88005553535',
    email: 'email@mail.ru',
  };
  localStorage.setItem('user', JSON.stringify(user));
  return new Promise(() => user);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}