import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PORT}/tasks`);
        setTasks(response.data);
      } catch (e) {
        console.error('Error al intentar conseguir tasks', e);
      }
    };
    fetchTasks();
  }, []);

  return { tasks, setTasks };
};

export default useGetTasks;
