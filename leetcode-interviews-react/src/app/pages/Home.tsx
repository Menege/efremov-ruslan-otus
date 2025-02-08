import React, { useState, useEffect } from 'react';
import { getTasks } from '../api/tasksApi';
import { Task } from '../types/task';
import Link from 'next/link';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    return (
      (!difficulty || task.difficulty === difficulty) &&
      (!tag || task.tags.includes(tag))
    );
  });

  return (
    <div>
      <h1>Список задач</h1>
      <div>
        <label>Фильтр по сложности:</label>
        <select onChange={(e) => setDifficulty(e.target.value || null)}>
          <option value="">Все</option>
          <option value="easy">Простая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </select>
      </div>
      <div>
        <label>Фильтр по тегам:</label>
        <input type="text" onChange={(e) => setTag(e.target.value || null)} placeholder="Введите тег" />
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/tasks/new">Добавить новую задачу</Link>
    </div>
  );
};

export default Home;
