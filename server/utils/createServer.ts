import isDev from "./isDev";
import express from "express";
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
import helmet from "helmet";

const app = express();
const cors = require("cors");

//
const whiteListDev = ["localhost:3000", "http://localhost:3000", "http://127.0.0.1:3000"];
const whiteListProd = [
  "https://russell-carey.com",
  "https://russell-carey.com/folioapi",
  "https://www.russell-carey.com",
];

// Main server and middleware / parsers
export const createServer = () => {
  //
  app.use(
    cors({
      origin: isDev() ? whiteListDev : whiteListProd,
      credentials: true,
    })
  );

  app.use(
    bodyParser.json({
      limit: "1mb",
    })
  );

  app.use(helmet());
  app.use(cookieParser());

  return app;
};
