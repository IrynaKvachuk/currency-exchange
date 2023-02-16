import axios from 'axios';

const URL = 'http://localhost:3000';

const BASE_URL = URL;

const ENDPOINTS = {};

axios.defaults.headers.common['x-requested-with'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export { BASE_URL, ENDPOINTS };
