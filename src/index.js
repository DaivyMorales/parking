import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";

import "./database.js";

//Routes Imports
import indexVehicles from "./Routes/vehicle.routes.js";

const app = express();

app.use(express.json());

app.use("/vehicles", indexVehicles);

app.use(morgan("dev"));

app.listen(PORT);
console.log(`The server is running on ${PORT} port`);
