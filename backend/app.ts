import express from "express"
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import tasks from './routes/tasks';
import notFound from './middleware/not-found'
import errorWrapper from "./middleware/error-wrap";

dotenv.config({ path: path.resolve(`${__dirname}/../.env`) });

const DB_ROOT = process.env.DB_ROOT;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const BACKEND_PORT = process.env.BACKEND_PORT || 8000;
const MONGO_DB_HOST = process.env.MONGO_DB_HOST


const connectionString = `mongodb://${DB_ROOT}:${DB_PASS}@${MONGO_DB_HOST}:27017/${DB_NAME}?authSource=admin&retryWrites=true`;
const connectDB = () => {
    return mongoose.connect(connectionString)
        .then(() => console.log('Connected to MongoDB'))
        .then(() => console.log('OK'))
        .catch((err: Error) => console.error('Could not connect to MongoDB...', err));
}

const app = express();

const corsOptions: cors.CorsOptions = {
    origin: function (origin: string | undefined, callback: Function) {
        const regex = /^http:\/\/localhost(:[0-9]+)?$/;
        if (regex.test(origin || '')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors());

app.use(express.json());
app.use('/api/v1/tasks/', tasks);
app.use(notFound);
app.use(errorWrapper);

const start = async () => {
    try {
        await connectDB();
        app.listen(BACKEND_PORT, () => console.log(`Server is listening on port ${BACKEND_PORT}...`));
    }
    catch (err) {
        console.log(err);
    }
}

start();

