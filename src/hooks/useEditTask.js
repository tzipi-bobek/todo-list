import axios from 'axios';

const useEditTask = () => {
  const editTask = async (id, name, completed) => {
    try {
      const response = await axios.put(`http://localhost:3001/edit/${id}`, { name, completed });
      return response.data;
    } catch (err) {
      throw new Error('Error editing task');
    }
  };

  return { editTask };
};

export default useEditTask;
