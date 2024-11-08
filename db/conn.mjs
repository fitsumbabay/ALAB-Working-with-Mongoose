//import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables
const connectionString = process.env.ATLAS_URI;

const db = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully with Mongoose");
  } catch (error) {
    console.error("MongoDB connection error:", error);
   
  }
};

export default db;

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;
