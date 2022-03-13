import isDev from "./utils/isDev";
import dotenv from "dotenv";
dotenv.config();

const Routes = require("./routes/routes");
import { createServer } from "./utils/createServer";

// From create server file..
const app = createServer();

//Rooooutes
app.use(!isDev() ? "/folioapi/drawing" : "/api/drawing", Routes);

app.listen(process.env.PORT, () => {
  console.log(`Connected to server on port ${process.env.PORT}`);
});
