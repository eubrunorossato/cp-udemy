import mongoose from "mongoose";

const port = process.env.MONGODB_DSN || "mongodb://db:27017/CP_UDEMY";

try {
  mongoose.connect(port, ({ useNewUrlParser: true }));
} catch (err) {
  throw err;
}
