const mongoose = require('mongoose');
const Message = require('./models/message'); // Update the path accordingly

// Connect to MongoDB
mongoose.connect('mongodb+srv://cashtonholbert:LRw7H2hfMlXM19BD@messagescluster.dxrne6a.mongodb.net/mini-message-DB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Insert sample data
const sampleMessages = [
  { user: "Joe Biden", message: "Eat some chocolate chocolate chip"},
  { user: 'Don Corleone', message: 'A friend should always underestimate your virtues and an enemy overestimate your faults' }
];

Message.insertMany(sampleMessages)
  .then(() => {
    console.log('Sample data inserted successfully');
    mongoose.connection.close(); // Close the connection after insertion
  })
  .catch((error) => console.error('Error inserting sample data:', error));
