import ApiService from './api.service';
import { TokenService, } from './storage.service';

/**
 * методы login, logout, getProfile, refreshToken
 * истекший токен обновляется с помощью ApiService.unmount401Interceptor
 * все эти штуки используются в store/auth.module.js
*/ 

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {
    /**
     * Войти и сохранить токен в TokenService.
     * 
     * @returns access_token
     * @throws AuthenticationError 
    **/
    login: async function(username, password) {
      const requestData = {
        method: 'post',
        url: "/o/token/",
        data: {
          username: username,
          password: password,
        },
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            access_token: '12345',
            refresh_token: '54321',
          },
        };
        requestData; // чтобы eslint не ругался
        
        TokenService.saveToken(response.data.access_token);
        TokenService.saveRefreshToken(response.data.refresh_token);
        ApiService.setHeader();
        ApiService.mount401Interceptor();

        return response.data.access_token;
      } catch (error) {
        throw new AuthenticationError(
          error.response.status, 
          error.response.data.detail
        );
      }
    },

    /**
     * Обновить токен.
     * 
     * @returns access_token
     * @throws AuthenticationError 
    **/
    refreshToken: async function() {
      const refreshToken = TokenService.getRefreshToken();

      const requestData = {
        method: 'post',
        url: "/o/token/",
        data: {
          refresh_token: refreshToken,
        },
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            access_token: '12345',
            refresh_token: '54321',
          },
        };
        requestData; // чтобы eslint не ругался

        TokenService.saveToken(response.data.access_token);
        TokenService.saveRefreshToken(response.data.refresh_token);
        // Update the header in ApiService
        ApiService.setHeader();

        return response.data.access_token;
      } catch (error) {
        throw new AuthenticationError(
          error.response.status, 
          error.response.data.detail
        );
      }

    },

    /**
     * Получить данные пользователя.
     * 
     * @returns user
     * @throws AuthenticationError 
    **/
    getProfile: async function() {
      const requestData = {
        method: 'get',
        url: "/o/token/",
        header: {
          token: TokenService.getToken,
        },
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            user: {
              photo: '', // как хранить медиа?
              firstName: 'Елизавета',
              lastName: 'Иванова',
              patronymic: 'Прокофьевна',
              phone: '88005553535',
              email: 'email@mail.ru',
            },
          },
        };
        requestData; // чтобы eslint не ругался

        return response.data.user;
      } catch (error) {
        throw new AuthenticationError(
          error.response.status,
          error.response.data.detail
        );
      }
    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
    logout() {
      // Remove the token and remove Authorization header from Api Service as well 
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      ApiService.removeHeader();
      
      // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
      ApiService.unmount401Interceptor();
    },
};

export default UserService;

export { UserService, AuthenticationError, };