const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dbuser:wEo6112uvyK9hWtg@cluster0.jm4h2.mongodb.net/blockchain?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema  = new mongoose.Schema({
    id: String, 
    itemId: String, 
    paid: Boolean
}); 

const Payment = mongoose.model('Payment' , paymentSchema);

module.exports = {
    Payment
}; 