const FridgeItem = require('../models/FridgeItem')

const addItem = async (req, res) => { 
    try {
        const {name, quantity, category, expirationDate } = req.body; // get the data sent from frontend
    
    const newItem = FridgeItem({ // create new item from data sent from frontend
        name,
        quantity, 
        category,
        expirationDate
    });

    const savedItem = await newItem.save(); // save to MongoDB
    res.status(201).json(savedItem) // send the new item back as json to frontend
} catch (err) {
    res.status(500).json({ error: "Failed to save item", details: err.message }); // send error response back to frontend
}
};

module.exports = {addItem};