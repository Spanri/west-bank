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
        // коэффициенты к рублю
        // 0 - покупка, 1 - продажа
        const response = {
          data: {
            currency: {
              dollar: [50, 55,],
              euro: [60, 65,],
              pound: [80, 85,],
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
              relevance: new Date(2019, 7, 19, 12, 31), // месяцы с 0
              ruble: 1,
              dollar: 70, // коэффициенты к рублю
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