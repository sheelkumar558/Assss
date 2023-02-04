import React from "react";
import "./thank.css";
import { useNavigate } from "react-router-dom";

export const ThankPage = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const navigate = useNavigate();

  const backFun = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <h1>
        Thanks a ton for taking out your precious time and for completing the
        survey
      </h1>
      <h2>{`Email Address :-${data.email}  `}</h2>
      <h2>{`Mobile Number :- ${data.code}-${data.phone}`}</h2>
      <button className="btn" onClick={backFun}>
        Back
      </button>
    </div>
  );
};
