import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, getTaskById, updateTask } from '../api/tasksApi';
import { Task } from '../types/task';

const TaskForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    examples: '',
    difficulty: 'easy',
    tags: [],
  });

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        const data = await getTaskById(id);
        setTask(data);
      };
      fetchTask();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
    setTask({ ...task, tags: selectedTags });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Название</label>
      <input type="text" name="title" value={task.title} onChange={handleChange} required />

      <label>Описание</label>
      <textarea name="description" value={task.description} onChange={handleChange} required />

      <label>Примеры</label>
      <textarea name="examples" value={task.examples} onChange={handleChange} required />

      <label>Сложность</label>
      <select name="difficulty" value={task.difficulty} onChange={handleChange}>
        <option value="easy">Простая</option>
        <option value="medium">Средняя</option>
        <option value="hard">Сложная</option>
      </select>

      <label>Теги</label>
      <select name="tags" value={task.tags} onChange={handleTagsChange} multiple>
        <option value="алгоритмы">Алгоритмы</option>
        <option value="структуры данных">Структуры данных</option>
        <option value="математика">Математика</option>
      </select>

      <button type="submit">{id ? 'Обновить задачу' : 'Создать задачу'}</button>
    </form>
  );
};

export default TaskForm;
