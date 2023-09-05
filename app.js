
const allRoute = require('./route/route.js')
const dotenv = require ("dotenv");
dotenv.config();
const express = require("express")

const cors = require ("cors");
const bodyParser = require("body-parser");
const helmet = require ("helmet");
const mongoSanitize = require ("express-mongo-sanitize");
const xss = require ("xss-clean");
const rateLimit = require ("express-rate-limit");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json"
  );
  next();
});

//rete limiting
const limit = rateLimit({
  max: 1000, // max requests
  windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout 0
  message: "Too many requests", // message to send
});

app.use("/api/", allRoute, limit);

module.exports =app;