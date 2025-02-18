import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	async function submitForm(e) {
		e.preventDefault()
		let data = new FormData(e.target)
		let resp = await actions.userLogin(data.get("email"), data.get("password"))
		if(resp >= 400) {
			return
		}
		navigate('/recommend', { replace: true })
		console.log("Login exitoso!!")
	}

	function signup() {
		navigate("/api/signup");
	}

	function passwordRecovery() {
		navigate("/api/passwordRecovery");
	}

	return (
		<div className="container-login text-center">
			<form className="login-form" onSubmit={submitForm}>
				<h1 className="login-title">Login</h1>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
					<input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" name="password" id="exampleInputPassword1" />
				</div>
				<div className="password-recovery">
					<button onClick={passwordRecovery} className="password-recovery-btn btn" type="button">Forgot Password?</button>
				</div>
				<div className="login">
					<button type="submit" className="login-button btn btn-primary">Login</button>
				</div>
				<div className="signup-login">
					<span className="mx-2">Not a member?</span>
					<button onClick={signup} className="signup-btn btn" type="button">Signup</button>
				</div>
			</form>
		</div>
	);
};
