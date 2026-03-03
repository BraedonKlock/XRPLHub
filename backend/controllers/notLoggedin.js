const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../util/database");

async function login(req, res) {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	try {
		const [rows] = await db.execute("SELECT * FROM accounts WHERE email = ?", [email]);

		if (rows.length === 0) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const user = rows[0];
		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_ACCESS_SECRET,
			{ expiresIn: "7d" }
		);

		res.json({ token });
	} catch (err) {
		console.error("Login error:", err);
		res.status(500).json({ message: "Server error" });
	}
}

module.exports = { login };
