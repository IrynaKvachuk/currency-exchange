import axios from 'axios';

const URL = 'http://localhost:3000';

const BASE_URL = URL;

const ENDPOINTS = {
  currencyList: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
};

axios.defaults.headers.common['x-requested-with'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export { BASE_URL, ENDPOINTS };
