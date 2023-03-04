const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URI;

const taskManagerSchema = mongoose.Schema({
  title: String,
  content: String,
  status: Boolean,
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

connectDB();

module.exports = mongoose.model("taskManager", taskManagerSchema);
