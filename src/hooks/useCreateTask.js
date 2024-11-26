import axios from 'axios';

const useCreateTask = () => {
  const createTask = async (name) => {
    console.log('creando un nuevo task con name: ', name)
    try {
      const response = await axios.post('http://localhost:3001/save', { name });
      console.log('id de el task creado: ', response.data.id)
      return response.data;
    } catch (e) {
      throw new Error('Error creating task', e);
    }
  };

  return { createTask };
};

export default useCreateTask;
