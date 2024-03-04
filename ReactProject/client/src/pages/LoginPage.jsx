import React from "react";
import "../styles/Login.scss";
const LoginPage = () => {
  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form">
          <input
            type="email"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
  );
};

export default LoginPage;
