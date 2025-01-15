import axios from 'axios';

const useEditTask = () => {
  const editTask = async (id, name, completed) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_PORT}/edit/${id}`, { name, completed });
      return response.data;
    } catch (err) {
      throw new Error('Error editing task');
    }
  };

  return { editTask };
};

export default useEditTask;
