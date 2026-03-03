import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

import "./Header.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const { token, logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!menuRef.current) return;
			if (!menuRef.current.contains(e.target)) {
				setIsOpen(false);
			};
		};

		const handleScroll = () => {
			setIsOpen(false);
		};

		document.addEventListener("pointerdown", handleClickOutside, true);
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			document.removeEventListener("pointerdown", handleClickOutside, true);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [])

	function handleLogout() {
		logout();
		setIsOpen(false);
		navigate("/");
	}

	return (
		<header ref={menuRef}>
			<nav>
				<button onClick={() => setIsOpen(prev => !prev)} className="hamburger">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
			</nav>
			<h1>XRPL Hub</h1>
			<div className={`mobile ${isOpen ? "open" : ""}`}>
				{token ? (
					<>
						<NavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
						<NavLink to="/wallet-creation" onClick={() => setIsOpen(false)}>Wallet Creation</NavLink>
						<NavLink to="" onClick={() => setIsOpen(false)}>Payment Channels</NavLink>
						<NavLink to="" onClick={() => setIsOpen(false)}>Escrow</NavLink>
						<NavLink to="" onClick={() => setIsOpen(false)}>Issued Assets</NavLink>
						<NavLink to="" onClick={() => setIsOpen(false)}>DEX</NavLink>
						<button className="logout-btn" onClick={handleLogout}>Log Out</button>
					</>
				) : (
					<>
						<Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
						<Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
					</>
				)}
			</div>
		</header>
	)
}
