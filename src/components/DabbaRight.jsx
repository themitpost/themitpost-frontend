// components/DabbaRight.js
import React from "react";
import "./Dabba.css";

const DabbaRight = () => {
	return (
		<nav className="dabba dabba-right">
			<section className="dabba-content">
				<h2>About</h2>
				<ul>
					<li className="category">About Us</li>
					<li className="category">The Board of 2025-26</li>
					<li className="category">Instagram</li>
					<li className="category">LinkedIn</li>
					<li className="category">From the Editor's Desk</li>
				</ul>
			</section>
			<section className="dabba-content">
				<h2>Resources</h2>
				<ul>
					<li className="category">MIT Information Brochure</li>
					<li className="category">Academic Calendar</li>
					<li className="category">All Branches Syllabus</li>
					<li className="category">CGPA Conversion Factor</li>
				</ul>
			</section>
		</nav>
	);
};

export default DabbaRight;
