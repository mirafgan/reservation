import { config } from "dotenv";
config()
import { port } from "./config";
import express, { Express } from "express"
import routes from "./routes";
const app: Express = express();

app.use("/api", routes)

app.listen(port, () => console.log(`Project is running in http:localhost:${port}`))