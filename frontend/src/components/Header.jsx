import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState, useRef, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	
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
	},[])

	return (
		<header ref={menuRef}>
			<nav>
				<button onClick={() => setIsOpen(prev => !prev)} className="hamburger">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
			</nav>
			<h1>Header</h1>
			<div className={`mobile ${isOpen ? "open" : ""}`}>
				<NavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
				<NavLink to="/wallet-creation" onClick={() => setIsOpen(false)}>Wallet Creation</NavLink>
				<NavLink to="" onClick={() => setIsOpen(false)}>Payment Channels</NavLink>
				<NavLink to="" onClick={() => setIsOpen(false)}>Escrow</NavLink>
				<NavLink to="" onClick={() => setIsOpen(false)}>Issued Assets</NavLink>
				<NavLink to="" onClick={() => setIsOpen(false)}>DEX</NavLink>
			</div>
		</header>
	)
}
