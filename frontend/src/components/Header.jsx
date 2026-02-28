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
				<NavLink to="" onClick={() => setIsOpen(false)}>option one</NavLink>
			</div>
		</header>
	)
}
