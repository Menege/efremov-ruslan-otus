import axios from 'axios';

// Типы для задач
interface Task {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  popularity: number;
}

// URL твоего API (например, локальный сервер или продакшн-адрес)
const API_URL = import.meta.env.API_URL;

// Функция для получения списка задач
export const getUserProfile = async (id: string): Promise<Task[]> => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data; // предполагаем, что сервер возвращает задачи в поле data
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
