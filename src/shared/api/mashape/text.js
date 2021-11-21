// Base
import { API_URL, OPTIONS } from './base';

export const getTextContent = (num) => fetch(`${API_URL}/${num}/0/JSON`, OPTIONS)
  .then((req) => req.json());
