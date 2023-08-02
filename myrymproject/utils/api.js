import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getCharacters = async () => {
  try {
    const response = await axios.post(BASE_URL, {
      query: `
        query {
          characters {
            id
            name
            species
          }
        }
      `,
    });
    return response.data.data.characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
