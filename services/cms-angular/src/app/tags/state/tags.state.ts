import { Tag } from '../../models/tag.model'; // Модель для тега

export interface TagState {
  tags: any[]; // Список тегов
  loading: boolean; // Индикатор загрузки
  error: string | null; // Ошибка
  currentTag: Tag | null | undefined;
}

export const initialTagState: TagState = {
  tags: [],
  loading: false,
  error: null,
  currentTag: null
};
