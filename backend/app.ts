const express = require("express");
const path = require('path')
const mongoose = require('mongoose');
const tasks = require('./routes/tasks')

require("dotenv").config({ path: path.resolve(`${__dirname}/../.env`) });

const DB_ROOT = process.env.DB_ROOT;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const BACKEND_PORT = process.env.BACKEND_PORT;

const connectionString = `mongodb://${DB_ROOT}:${DB_PASS}@localhost:27017/${DB_NAME}?authSource=admin`;
mongoose.connect(connectionString)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err:Error) => console.error('Could not connect to MongoDB...', err));

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasks);

app.listen(BACKEND_PORT, console.log(`Server is listening on port ${BACKEND_PORT}...`));


