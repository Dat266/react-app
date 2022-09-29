import { useState, useRef } from "react";

const Login = () => {
	const inputRef = useRef();

	const initalData = {
		email: "",
		password: "",
	};

	const handleLogin = (e) => {
		e.preventDefault();
		setDataLogin(initalData);
		inputRef.current.focus();
	};

	const [dataLogin, setDataLogin] = useState(initalData);

	return (
		<form className="form-login" onSubmit={handleLogin}>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email
				</label>
				<input
					ref={inputRef}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					onChange={(e) =>
						setDataLogin({ ...dataLogin, email: e.target.value })
					}
					value={dataLogin.email}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					onChange={(e) =>
						setDataLogin({ ...dataLogin, password: e.target.value })
					}
					value={dataLogin.password}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Login
			</button>
		</form>
	);
};

export default Login;
