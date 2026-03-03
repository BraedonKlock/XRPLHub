async function dashboard(req, res) {
	// req.user is set by the requireAuth middleware: { id, email }
	res.json({ message: "Welcome", user: req.user });
}

module.exports = { dashboard };
