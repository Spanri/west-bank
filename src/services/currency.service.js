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
    getCurrencyRates: async function() {
      const requestData = {
        method: 'get',
        url: "/o/token/",
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            currency: {
              ruble: 1,
              dollar: 50,
              euro: 60,
              pound: 80,
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
    getCurrencyConverter: async function() {
      const requestData = {
        method: 'get',
        url: "/o/token/",
      };

      try {
        // const response = await ApiService.customRequest(requestData);
        const response = {
          data: {
            converter: {
              relevance: '02/01/2019',
              ruble: 1,
              dollar: 70,
              euro: 80,
              pound: 90,
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