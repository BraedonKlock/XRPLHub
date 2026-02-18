import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav>
				<button onClick={() => setIsOpen(prev => !prev)} className="hamburger">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
			</nav>
			<h1>Header</h1>
			<div className={`mobile ${isOpen ? "open" : ""}`}>
				<NavLink>option one</NavLink>
			</div>
		</header>
	)
}
