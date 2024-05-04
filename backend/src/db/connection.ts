import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Cannot Connect To Db");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("Cannot Disconnect To Db");
  }
}

export { connectToDatabase, disconnectFromDatabase };
