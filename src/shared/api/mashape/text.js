import {API_URL, OPTIONS} from './base';

export const getTextData = (nums) => {
  return fetch(`${API_URL}${nums}/0/JSON`, OPTIONS)
    .then((req) => req.json());
}
