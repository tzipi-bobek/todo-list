import axios from 'axios';

const useCreateTask = () => {
  const createTask = async (name) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_PORT}/save`, { name });
      return response.data;
    } catch (e) {
      throw new Error('Error creating task', e);
    }
  };

  return { createTask };
};

export default useCreateTask;
