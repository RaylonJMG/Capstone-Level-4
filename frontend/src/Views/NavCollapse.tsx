import React from "react";
import { NavLink } from "react-router";
import { SignInArea } from "./SignInArea";

export function NavCollapse() {
	const domain = window.location.hostname;
	let rootPath = "";
	if (domain === "raylonjmg.github.io") rootPath = "/Capstone-Level-4";

	return (
		<nav className="nav-pills navbar navbar-expand-sm bg-body-tertiary">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink
							end
							className="nav-link"
							aria-current="page"
							to={`${rootPath}/`}>
							Home
						</NavLink>
						<NavLink
							className="nav-link"
							to={`${rootPath}/about`}>
							About
						</NavLink>
						<NavLink
							className="nav-link"
							to={`${rootPath}/photos`}>
							Photos
						</NavLink>
						<NavLink
							className="nav-link"
							to={`${rootPath}/menus`}>
							Menus
						</NavLink>
						<NavLink
							className="nav-link"
							to={`${rootPath}/contact`}>
							Contact
						</NavLink>
						<NavLink
							className="nav-link"
							to={`${rootPath}/server`}>
							Server
						</NavLink>
						<SignInArea />
					</div>
				</div>
			</div>
		</nav>
	);
}
