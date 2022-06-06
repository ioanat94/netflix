const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful...'))
  .catch((err) => console.log(err));

app.use(express.json());

// Accessing the path module
const path = require('path');

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/movies', movieRoute);
app.use('/lists', listRoute);

// Step 1:
app.use(express.static(path.resolve(__dirname, './client/build')));
// Step 2:
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});