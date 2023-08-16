import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan"
import bluebird from "bluebird";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 9000;

mongoose.Promise = bluebird;

mongoose
  .connect(process.env.MONGO_URL, {
    useMongoClient: true,
   
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MongoDB is running.....Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
