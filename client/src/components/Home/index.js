import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Hello Home Page</h1>
			<div className="form">
				<div>
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</div>

				<div>
					<Link className="nav-link" to="/register">
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
