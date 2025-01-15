const express = require('express');
const cors = require('cors');
const taskController = require('./controller/taskController');

const app = express();
app.use(cors());
app.use(express.json());

taskController.configureRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
