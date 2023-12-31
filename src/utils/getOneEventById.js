import axios from 'axios';

export const getOneEventById = async id => {
  try {
    const data = await axios.get(
      `https://64c88fa6a1fe0128fbd5e8b1.mockapi.io/events/${id}`
    );

    return data;
  } catch (error) {
    return;
  }
};
