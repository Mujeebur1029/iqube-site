import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const slides = ["/CB121.jpg", "/RK0E76.jpg", "/pos-2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSignIn = () => {
    // later you can add authentication check here
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="form-section">
        <img src="/icube-logo.png" alt="icube logo" className="logo" />
        <p className="subtitle">
          Enter your username and password to continue
        </p>

        <div className="input-group">
          <input type="text" placeholder="Username" />
          <span className="domain">@sk</span>
        </div>

        <div className="input-group">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
          />
          <button
            type="button"
            className="toggle"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁"}
          </button>
        </div>

        <button className="sign-in" onClick={handleSignIn}>
          Sign In
        </button>
      </div>

      <div className="image-section">
        <div className="slider">
          {slides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`slide ${index === activeSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
