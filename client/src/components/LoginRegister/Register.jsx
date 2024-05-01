import { useState } from 'react';
import './loginregister.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [isError, setisError] = useState(false);
    const [error, setError] = useState("Some Error Occured!")
    const handleSubmit = async (e) => {
        e.preventDefault();

        setisError(false);
        if (!name || !email || !pass) {
            setError("Some Fields are Missing!")
            setisError(true);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/register-user",
                {
                    name: name,
                    email: email,
                    password: pass,
                }
            );
            console.log(response);
            if (!response) {
                setisError(true);
                setError("Something went wrong")
                return;
            } else {
                setError(response.data.error);
                setisError(false);
            }
            if (response.data.error === "User already Exist") {
                setisError(true);
                setError(response.data.error);
                
                console.log(response.data.error);
            }
             else window.alert("Registered successfully");
        } catch (error) {
            setisError(true);
        }
    }
    return (
        <div className='Stock_main_register'>
        <div className='container_login'>
            <div className="body">
                <div className="home-bannerImage-container">
                    {/* <img src={BannerBackground} alt="" /> */}
                </div>
                <div className="auth-form-container">
                    <div style={{ marginBottom: "30px" }}>
                        <h2>Register</h2>
                    </div>
                    <div className="forms">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="name">Full name</label>
                                <input
                                    value={name}
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Full Name"
                                />
                            </div>

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
                                role="button"
                            >
                                Register
                            </button>
                        </form>
                        {isError ? (
                            <div className="error" style={{ marginTop: "20px" }}>
                                <span style={{ color: "red" }}>{error}</span>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <Link to={"/login"}>
                            <span style={{ color: "#22092c" }}>
                                Already Registered? Login Here
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register;