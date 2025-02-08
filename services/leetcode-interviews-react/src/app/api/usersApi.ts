import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'http://localhost:3000/api/users';

export const getUserById = async (id: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateUserRating = async (id: string, rating: number): Promise<User> => {
  const response = await axios.patch(`${API_URL}/${id}`, { rating });
  return response.data;
};
