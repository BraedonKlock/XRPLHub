const express = require("express");
const http = require("http");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config(); // load backend/.env in dev
};

const notLoggedinRoutes = require("./api/notLoggedin");
const loggedinRoutes = require("./api/loggedin");
const { requireAuth } = require("./middleware/auth");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.use("/api", notLoggedinRoutes);
app.use("/api/loggedin",requireAuth, loggedinRoutes);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT} `);
});
