import { useState } from 'react';
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';

import './loginregister.css'

const Login = () => {
   const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isError, setisError] = useState(false);
    const [error, setError] = useState("Some Error Occured!");
    const check = async (e) => {
        e.preventDefault();

        setisError(false);
        if (!email || !pass) {
            setError("Some Fields are Missing!");
            setisError(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/login-user", {
                email: email,
                password: pass,
            });
            // console.log(response);
            if (!response) {
                setisError(true);
                setError("Something went wrong");
                return;
            } else {
                setisError(false);
            }
            if (response.data.message === "User does not exist") {
                // window.alert('User does not exist')
                setisError(true)
                setError(response.data.message);
                return;
            } else if (response.data.message === "Invalid Password") {
                setisError(true)
                setError("Invalid email or Password");
                return;
            }
            // setloginId({ userId: response.data.userInfo._id, userName: response.data.userInfo.name, userEmail: response.data.userInfo.email, quizIds: response.data.userInfo.attemptedQuizes })
            // console.log('here is data recieved',response)
            console.log(response.data.userInfo);
            navigate('/home',{state:{val:response.data.userInfo}});
            // window.alert("User Login successfully");
            // <Navigate to="/"  />
        } catch (error) {
            setisError(true);
            setError("An error occurred during login");
            console.log(error);
        }
    }
    return (
        <div className='Stock_main'>
            <div className='container_login'>
                <div className="body">
                    <div className="auth-form-container">

                        <div style={{ marginBottom: "30px" }}>
                            <h2>Login</h2>
                        </div>
                        <div className="forms">
                            <form className="register-form">
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="youremail@gmail.com"
                                        id="email"
                                        name="email"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        type="password"
                                        placeholder="********"
                                        id="password"
                                        name="password"
                                    />
                                </div>
                                <button
                                    style={{ marginTop: "30px" }}
                                    className="button-30"
                                    onClick={check}
                                >
                                    Login
                                </button>
                                {isError ? (
                                    <div className="error" style={{ marginTop: "20px" }}>
                                        <span style={{ color: "red" }}>{error}</span>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </form>
                        </div>
                        <div style={{ marginTop: "30px", color: "#22092c" }}>
                            <Link to={"/register"}>
                                <span style={{ color: "#22092c" }}>
                                    Don't have an account? Register here.
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;