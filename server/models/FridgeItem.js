const mongoose = require('mongoose')

const FridgeItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    category: {type: String, enum: ["Dairy", "Meat", "Vegetables", "Fruit", "Other"], default: "Other"},
    expirationDate: {type: Date, required: true},
    addedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('FridgeItem', FridgeItemSchema) // convert schema to model and set the name to FridgeItem

