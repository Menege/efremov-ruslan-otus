import { createAction, props } from '@ngrx/store';
import { Tag } from '../../models/tag.model'; // Модель для тега

export const loadTags = createAction('[Tags] Load Tags');
export const loadTagsSuccess = createAction(
  '[Tags] Load Tags Success',
  props<{ tags: any[] }>()
);
export const loadTagsFailure = createAction(
  '[Tags] Load Tags Failure',
  props<{ error: string }>()
);

export const addTag = createAction(
  '[Tags] Add Tag',
  props<{ tag: any }>()
);
export const addTagSuccess = createAction('[Tags] Add Tag Success');
export const addTagFailure = createAction(
  '[Tags] Add Tag Failure',
  props<{ error: string }>()
);

// Загрузка тега по ID
export const loadTagById = createAction(
  '[Tags] Load Tag By Id',
  props<{ id: string }>()
);

// Загрузка тега успешна
export const loadTagByIdSuccess = createAction(
  '[Tags] Load Tag By Id Success',
  props<{ tag: Tag }>()
);

// Сохранение (создание/редактирование) тега
export const saveTag = createAction(
  '[Tags] Save Tag',
  props<{ id?: string | undefined; data: Tag }>() // Если `id` есть — редактируем, если нет — создаём
);

// Сохранение тега успешно
export const saveTagSuccess = createAction(
  '[Tags] Save Tag Success',
  props<{ tag: Tag }>()
);
