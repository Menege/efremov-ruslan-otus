import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, setTasks, fetchData } from '../store.ts';

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { tasks } = useSelector((state: RootState)  => state.tasks);
  const dispatch = useDispatch<AppDispatch>()

  const fetchTask = async () => {
    const res: any = dispatch(fetchData(id))
    setTasks(res)
  };
  useEffect(() => {
    fetchTask();
  }, [id]);

  if (!tasks) return <p>Loading...</p>;

  return (
    <div>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
};

export default TaskDetails;
