// connection to our database.
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB OK: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
