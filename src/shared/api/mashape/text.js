const API_URL = 'https://mashape-community-skate-ipsum.p.rapidapi.com';
const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd0db3facf7msh4bd8b090d719809p1008bdjsn138563af4356',
    'x-rapidapi-host': 'mashape-community-skate-ipsum.p.rapidapi.com',
  },
};

export const getTextData = (nums) => {
  return fetch(`${API_URL}${nums}/0/JSON`, OPTIONS)
    .then((req) => req.json());
}
