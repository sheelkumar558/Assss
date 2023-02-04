import React, { useState } from "react";
import "./talkPage.css";
import bg from "../../img/bgstyle.png";
import person from "../../img/human.png";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  phone: "",
  code: "+91",
};

export const TalkPage = () => {
  const [allData, setAllData] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();
  const { email, phone, code } = allData;
  console.log(allData);
  const handleChange = (e) => {
    setAllData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
      return;
    }

    localStorage.setItem("data", JSON.stringify(allData));
    navigate("/thankPage");
  };

  return (
    <div className="container">
      <div className="image">
        <img className="img-1" src={bg} alt="" />
        <img className="img-2" src={person} alt="" />
      </div>
      <div className="right">
        <img className="logo" src={logo} alt="" />
        <p className="get">Get a FREE</p>
        <p className="export">consultation with an expert</p>
        <form className="input-box" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            className="input"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          {emailError && <div>{emailError}</div>}
          <div
            style={{
              border: " 1px solid rgb(202, 168, 168)",
              borderRadius: "5px",
            }}
          >
            <select
              style={{
                height: "35px",
                border: "none",
                textAlign: " start",
              }}
              type="number"
              name="code"
              value={code}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+324">+324</option>
              <option value="+492">+492</option>
              <option value="+89">+89</option>
              <option value="+92">+92</option>
            </select>
            <input
              style={{
                border: "none",
                width: "422px",
              }}
              type="number"
              name="phone"
              value={phone}
              className="input"
              placeholder="Enter your mobile"
              onChange={handleChange}
            />
          </div>
          {phoneError && <div>{phoneError}</div>}
          <button className="btn" type="submit">
            TALK TO US &#x2192;
          </button>
        </form>
      </div>
    </div>
  );
};
