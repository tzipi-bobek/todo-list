import axios from 'axios';

const useDeleteTask = () => {
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_PORT}/delete/${id}`);
      return response.data;
    } catch (e) {
      throw new Error('Error deleting task', e);
    }
  };

  return { deleteTask };
};

export default useDeleteTask;
