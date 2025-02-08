import { configureStore, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './types/task';
import { getTaskById } from './api/tasksApi';

interface TasksState {
  tasks: Task[] | [];
}

export const fetchData = createAsyncThunk(
    'tasks/fetchData',
    async (id: string | undefined) => {
        if (id) {
            const response: any = await getTaskById(id) as unknown as Array<Task>;
            return response.data;
        }
    }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] } as TasksState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;