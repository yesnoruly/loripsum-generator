// Base
import { API_URL} from './base';

export const getTextContent = (num) => fetch(`${API_URL}/?type=meat-and-filler&paras=${num}`)
  .then((req) => req.json());