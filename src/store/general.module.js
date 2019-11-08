import { CurrencyService, CurrencyError, } from '@/services/currency.service';
import router from '@/router';

// Переменные, которые никуда не относятся

const state = {
  currentWidth: '',
  currencyRates: {},
  currencyConverter: {
    relevence: new Date(),
    rubles: '',
    dollar: '',
    euro: '',
    pound: '',
  },
};

const getters = {
  currentWidth: state => state.currentWidth,
  currencyRates: state => state.currencyRates,
  currencyConverter: state => state.currencyConverter,
};

const actions = {
  setCurrentWidth({commit,}, currentWidth) {
    const isAuth = router.currentRoute.meta.type & 0b100;
    console.log('Ширина экрана', currentWidth);

    commit('currentWidthSuccess', currentWidth);
    if (currentWidth < 748 && isAuth) {
      router.push("/download-app");
    }
  },

  async getCurrencyRates({commit,}) {
    try {
      const currencyRates = await CurrencyService.getCurrencyRates();
      commit('currencyRatesSuccess', currencyRates);

      return true;
    } catch (e) {
      if (e instanceof CurrencyError) {
        console.log('Currency error', e.errorCode, e.message);
      }

      return false;
    }
  },

  async getCurrencyConverter({commit,}) {
    try {
      const currencyConverter = await CurrencyService.getCurrencyConverter();
      commit('currencyConverterSuccess', currencyConverter);

      return true;
    } catch (e) {
      if (e instanceof CurrencyError) {
        console.log('Currency error', e.errorCode, e.message);
      }

      return false;
    }
  },
};

const mutations = {
  currentWidthSuccess(state, currentWidth) {
    state.currentWidth = currentWidth;
  },
  currencyRatesSuccess(state, currencyRates) {
    state.currencyRates = currencyRates;
  },
  currencyConverterSuccess(state, currencyConverter) {
    state.currencyConverter = currencyConverter;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};