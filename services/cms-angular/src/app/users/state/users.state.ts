export interface UserState {
  users: any[]; // Список пользователей
  loading: boolean; // Индикатор загрузки
  error: string | null; // Ошибка
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: null
};
