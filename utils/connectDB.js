// import mongoose from "mongoose";

// async function connectDB(){
//     if (mongoose.connections[0].readyState) return
//     await mongoose.connect()
//     console.log("connect to DB");

// }

// export default connectDB;

import mongoose from "mongoose";

async function  connectDB() {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URInpm run devicePixelRatio);
    console.log("connect db");
}

export default connectDB