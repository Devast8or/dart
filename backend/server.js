const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Dart Season Sim Backend Running');
});

// TODO: Import and use routes from routes/ folder
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});