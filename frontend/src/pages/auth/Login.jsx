import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/AuthContext";
import axiosClient from "../../api/axios-client";

const Login = () => {
  const [errors, setErrors] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setErrors(null);

    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        console.log(err);
        return;
        if (response.data.errors && response.status == 422) {
          setErrors(response.data.errors);
        } else {
          setErrors({ message: response.data.message });
        }
      });
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p className="" key={key}>
                  {errors[key]}
                </p>
              ))}
            </div>
          )}
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
