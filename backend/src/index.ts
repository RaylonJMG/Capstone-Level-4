import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import { home } from "./routes/home";
import { auth } from "./routes/auth";

const hostname = "localhost";
const port = 8000;
const path = "/";

const app = express();
app.use(cors());
app.get("/", root);
app.get("/api", api);
app.get("/home", home);
app.get("/auth", auth);
app.listen(port, hostname, handleListen);

function handleListen() {
	console.log(`Listening on http://${hostname}:${port}...`);
	console.log(`Open a new terminal and run 'npm run build'`);
	console.log(
		`To debug, start this server "npm run-start" in a JavaScript Debug Terminal`
	);
}
