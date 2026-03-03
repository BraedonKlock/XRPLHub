import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./LoginPage.css";

export default function LoginPage() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (!res.ok) {
				setError(data.message || "Login failed");
				return;
			}

			login(data.token);
			navigate("/dashboard");
		} catch {
			setError("Unable to connect to server");
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="login-page">
			<div className="login-card">
				<div className="login-header">
					<div className="login-icon">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
							<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
					</div>
					<h1>Welcome Back</h1>
					<p>Sign in to your XRPL Hub account</p>
				</div>

				<form onSubmit={handleSubmit} className="login-form">
					<div className="field-group">
						<label htmlFor="email">Email</label>
						<div className="input-wrapper">
							<svg className="input-icon" viewBox="0 0 24 24" fill="none">
								<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
								<path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
							</svg>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
								value={formData.email}
								onChange={handleChange}
								autoComplete="email"
								required
							/>
						</div>
					</div>

					<div className="field-group">
						<label htmlFor="password">Password</label>
						<div className="input-wrapper">
							<svg className="input-icon" viewBox="0 0 24 24" fill="none">
								<rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
								<path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
								<circle cx="12" cy="16" r="1.5" fill="currentColor"/>
							</svg>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								placeholder="••••••••"
								value={formData.password}
								onChange={handleChange}
								autoComplete="current-password"
								required
							/>
							<button
								type="button"
								className="toggle-password"
								onClick={() => setShowPassword(prev => !prev)}
								aria-label={showPassword ? "Hide password" : "Show password"}
							>
								{showPassword ? (
									<svg viewBox="0 0 24 24" fill="none">
										<path d="M3 3l18 18M10.5 10.68A2 2 0 0 0 12 14a2 2 0 0 0 1.32-3.32M6.53 6.53C4.6 7.8 3 9.74 2 12c1.73 4.39 6 7.5 10 7.5 1.55 0 3.03-.37 4.34-1.03M9.9 4.24A9.12 9.12 0 0 1 12 4c4 0 8.27 3.11 10 7.5a18.6 18.6 0 0 1-1.72 3.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
									</svg>
								) : (
									<svg viewBox="0 0 24 24" fill="none">
										<path d="M2 12c1.73-4.39 6-7.5 10-7.5s8.27 3.11 10 7.5c-1.73 4.39-6 7.5-10 7.5S3.73 16.39 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
										<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
									</svg>
								)}
							</button>
						</div>
					</div>

					<div className="form-meta">
						<Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
					</div>

					{error && <p className="login-error">{error}</p>}

					<button type="submit" className="login-btn" disabled={loading}>
						<span>{loading ? "Signing in..." : "Sign In"}</span>
						<svg viewBox="0 0 24 24" fill="none">
							<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</form>

				<div className="login-footer">
					<span>Don't have an account?</span>
					<Link to="/register">Create one</Link>
				</div>
			</div>
		</main>
	);
}
