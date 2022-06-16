import React, { useEffect, useState } from "react";

// import logo from "./logo.svg";
import { MainContainer, BoxContainer } from "./styles";
// import "./styles.css";

const Main = () => {
  const [exValue, setExValue] = useState("ON");

  useEffect(() => {
    console.log(exValue);
  }, [exValue]);

  const changeValue = () => {
    const newValue = exValue === "ON" ? "OFF" : "ON";
    setExValue(newValue);
  };

  return (
    <MainContainer>
      <BoxContainer onClick={changeValue}>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
      <BoxContainer>Diego</BoxContainer>
    </MainContainer>

    // <div className="main-container">
    // <img src={logo} alt="logo" />
    //   <div className="box-container" onClick={changeValue}>
    //     diego
    //   </div>
    //   <div className="box-container">diego</div>
    //   <div className="box-container">diego</div>
    //   <div className="box-container">diego</div>
    //   <div className="box-container">diego</div>
    // </div>
  );
};

export default Main;
