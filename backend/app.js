const express = require("express");
const http = require("http");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config(); // load backend/.env in dev
};

const loggedinRoutes = require("/api/loggedin");

const app = express();

const server = http.createServer(app);

app.use("/api/loggedin", loggedinRoutes);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT} `);
});
