import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const inputRef = useRef();

	const initalUser = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	};

	const [user, setUser] = useState(initalUser);
	const [lists, setLists] = useState([]);

	const handleRegister = async (e) => {
		e.preventDefault();

		setLists((prev) => [...prev, user]);

		const res = await axios({
			method: "POST",
			url: "http://localhost:3000/register",
			data: {
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				password: user.password,
			},
		});
		console.log(res);

		setUser(initalUser);

		inputRef.current.focus();
	};

	return (
		<form
			className="row g-3 needs-validation form-register"
			noValidate
			onSubmit={handleRegister}
		>
			<div className="col-md-4">
				<label htmlFor="validationCustom01" className="form-label">
					First name
				</label>
				<input
					ref={inputRef}
					type="text"
					className="form-control"
					id="validationCustom01"
					required
					onChange={(e) => setUser({ ...user, firstname: e.target.value })}
					value={user.firstname}
				/>
				<div className="valid-feedback">Looks good!</div>
			</div>
			<div className="col-md-4">
				<label htmlFor="validationCustom02" className="form-label">
					Last name
				</label>
				<input
					type="text"
					className="form-control"
					id="validationCustom02"
					required
					onChange={(e) => setUser({ ...user, lastname: e.target.value })}
					value={user.lastname}
				/>
				<div className="valid-feedback">Looks good!</div>
			</div>

			<div className="col-md-4">
				<label htmlFor="validationCustomUsername" className="form-label">
					Email
				</label>
				<input
					type="text"
					className="form-control"
					id="validationCustomUsername"
					aria-describedby="inputGroupPrepend"
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					required
					value={user.email}
				/>
			</div>

			<div className="col-md-4">
				<label htmlFor="validationCustom03" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="validationCustom03"
					required
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					value={user.password}
				/>
			</div>

			<div className="col-12">
				<button className="btn btn-primary" type="submit">
					Register
				</button>
			</div>
			<Link to="/">Quay lại trang chủ</Link>
		</form>
	);
};

export default Register;
