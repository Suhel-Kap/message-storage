import express from "express";
import routes from "./routes";
import logger from "./middleware/logger";
import { config } from "./config";

const app = express();

app.use(express.json());
app.use(logger);
app.use(routes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
