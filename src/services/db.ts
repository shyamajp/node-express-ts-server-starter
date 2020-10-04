import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/test";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${MONGO_URI}`);
});

// When connection throws an error
mongoose.connection.on('error', (err: Error) => {
    console.log('Mongoose default connection error: ' + err);
});

// When connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected.');
});

// When Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination.');
        process.exit(0);
    });
}); 