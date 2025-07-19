// import required modules
const express = require('express'); // allows different requests and manages routes
const cors = require('cors'); // allows frontend to communicate with backend
const mongoose = require('mongoose'); // helps connect Node.js to MongoDB database and provices schemas to structure data
require('dotenv').config();
const fridgeRoutes = require('./routes/fridgeRoutes');

// create the express app
const app = express();

// set port to listen on
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', fridgeRoutes);

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => { // req contains frontend's request while res send data back to frontend
    res.send("Hello from backend!");
})

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})