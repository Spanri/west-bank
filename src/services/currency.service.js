//import ApiService from './api.service';

/**
 * методы getCurrency, getConverter
*/ 

/** 
 * сообщения ошибок никак не расшифровываются и 
 * показываются пользователю так, как они были 
 * переданы сюда
*/
class CurrencyError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const CurrencyService = {
    /**
     * Получить курс, по которому банк продает/покупает валюту
     * 
     * @returns currency
     * @throws CurrencyError 
    **/
    getCurrency: async function() {
      const requestData = {
        method: 'get',
        url: "/o/token/",
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            currency: {
              rub: 1,
              euro: 80,
              dol: 70,
              gbp: 90,
            },
          },
        };
        requestData; // чтобы eslint не ругался

        return response.data.currency;
      } catch (error) {
        throw new CurrencyError(
          error.response.status, 
          error.response.data.detail
        );
      }
    },

    /**
     * Получить курс валют (конвертер) в отношении друг к другу
     * 
     * @returns converter
     * @throws CurrencyError 
    **/
    getConverter: async function() {
      const requestData = {
        method: 'get',
        url: "/o/token/",
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            converter: {
              rub: 1,
              euro: 80,
              dol: 70,
              gbp: 90,
            },
          },
        };
        requestData; // чтобы eslint не ругался

        return response.data.converter;
      } catch (error) {
        throw new CurrencyError(
          error.response.status, 
          error.response.data.detail
        );
      }
    },
};

export default CurrencyService;

export { CurrencyService, CurrencyError, };