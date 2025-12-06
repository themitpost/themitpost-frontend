// components/DabbaLeft.js
import React from "react";
import "./Dabba.css";

const DabbaLeft = () => {
	return (
		<nav className="dabba dabba-left">
			<section className="dabba-content">
				<h2>Popular</h2>
				<ul>
					<li className="category">Article by Ron</li>
					<li className="category">The Wheel of Time</li>
					<li className="category">Legend of Zelda</li>
					<li className="category">Wrath of Zeus</li>
					<li className="category">Failure Management</li>
					<li className="category">To Infinity and Beyond</li>
					<li className="category">How to Survive in MIT</li>
				</ul>
			</section>
			<section className="dabba-content">
				<h2>Archives</h2>
				<ul>
					<li className="category">2024</li>
					<li className="category">2023</li>
					<li className="category">2022</li>
					<li className="category">2021</li>
					<li className="category">2020</li>
					<li className="category">2019</li>
					<li className="category">2018</li>
					<li className="category">2017</li>
					<li className="category">2016</li>
					<li className="category">2015</li>
				</ul>
			</section>
		</nav>
	);
};

export default DabbaLeft;
