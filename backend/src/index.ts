import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { home } from "./routes/home";
import { auth } from "./routes/auth";
import { api_advice } from "./routes/api_advice";
import { create } from "./routes/create";
import { read } from "./routes/read";
import { update } from "./routes/update";
import { deletion } from "./routes/deletion";

const hostname = "localhost";
const port = 8000;
const path = "/";

const app = express();
app.use(cors());
app.get("/", root);
app.get("/api_advice", api_advice);
app.get("/home", home);
app.get("/auth", auth);
app.get("/create", create);
app.get("/read", read);
app.get("/update", update);
app.get("/deletion", deletion);
app.listen(port, hostname, handleListen);

function handleListen() {
	console.log(`Listening on http://${hostname}:${port}...`);
	console.log(`Open a new terminal and run 'npm run build'`);
	console.log(
		`To debug, start this server "npm run-start" in a JavaScript Debug Terminal`
	);
}
