import axios from 'axios';

const useDeleteTask = () => {
  const deleteTask = async (id) => {
    console.log('eliminando un task con id: ', id)
    try {
      const response = await axios.delete(`http://localhost:3001/delete/${id}`);
      return response.data;
    } catch (e) {
      throw new Error('Error deleting task', e);
    }
  };

  return { deleteTask };
};

export default useDeleteTask;
