import mongoose from "mongoose";

const connetMongoDB = async () => {
     try {
         await mongoose.connect(process.env.MONGODB_URI!);
          console.log("Connection to MongoDB");
     } catch (error) {
          console.error(error);
     }
}

export default connetMongoDB