import express from 'express'; //building apis
import bodyParser from 'body-parser'; //parse the body of incoming requests to JS
import mongoose from 'mongoose'; //defines models with a schema for MongoDB
import cors from 'cors'; //cross origin requests
import dotenv from 'dotenv'; //loads info from .env files
import helmet from 'helmet'; //secures app by setting headers
import morgan from 'morgan'; //logs requests to the terminal
import kpiRoutes from './routes/kpi.js';
import productRoutes from './routes/product.js';
import transactionRoutes from './routes/transaction.js';
//MODELS IMPORTED FOR DATABASE DROP
// import KPI from "./models/KPI.js";
// import Product from "./models/Product.js";
// import Transaction from "./models/Transaction.js";
//DATA IMPORTED FROM data.js FILE FOR INITIAL COMMIT
// import { kpis, products, transactions } from "./data/data.js";
dotenv.config(); //loads environmenent
const app = express(); //initializes instance of the express application to define routes, middleware, and start the serverr



//configure express
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//mount the routes with the path and the function
app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);
app.use('/transaction', transactionRoutes);
const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	.then(async () => {
		app.listen(PORT, () =>
			console.log(
				`MongoDB is running......Server is Running on: http://localhost:${PORT}`
			)
		);

		//Drop the database for the initial commit to MONGODB

		// await mongoose.connection.db.dropDatabase();

		// KPI.insertMany(kpis);

		// Product.insertMany(products);

		// Transaction.insertMany(transactions);
	})

	.catch((error) => {
		console.error('MongoDB connection error:', error.message);
	});
