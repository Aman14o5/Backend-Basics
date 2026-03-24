import dotenv from "dotenv";
dotenv.config();

// start the real app AFTER env is ready
import("./index.js");
