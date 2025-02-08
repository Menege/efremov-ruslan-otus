export interface TaskState {
  tasks: any[]; // Список задач
  loading: boolean; // Индикатор загрузки
  error: string | null; // Ошибки
}

export const initialTaskState: TaskState = {
  tasks: [],
  loading: false,
  error: null
};
