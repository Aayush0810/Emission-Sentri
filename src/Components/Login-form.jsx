import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Logo from "../Assets/Logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [types, setTypes] = useState("password");
  const [icon, setIcon] = useState(BsEye);

  const handleToggle = () => {
    if (types === "password") {
      setIcon(BsEyeSlash);
      setTypes("text");
    } else {
      setIcon(BsEye);
      setTypes("password");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="main-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <img src={Logo} className="logo" alt="" />
          </div>
          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <label htmlFor="reset" className="reset">
              <a href="/">Reset password</a>
            </label>
            <div className="password">
              <input
                type={types}
                className={!password ? "form-input-error" : "form-input"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-span" onClick={handleToggle}>
                {icon}
              </span>
            </div>
          </div>
          <button className="btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
