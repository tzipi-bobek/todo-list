const express = require('express');
const cors = require('cors');
const taskController = require('./controller/taskController');

const app = express();
app.use(cors());
app.use(express.json());

taskController.configureRoutes(app);

app.listen(3001, () => {
  console.log('Server is running on port http://localhost:3001/');
});
