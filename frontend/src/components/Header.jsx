import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function Header() {
	return (
		<header>
			<nav>
				<button className="hamburger">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
			</nav>
			<h1>Header</h1>
		</header>
	)
}
