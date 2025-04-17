import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import Chatbot from "./Chatbot";
import Cons from "./cons";
import Contact from "./Contact";
import "./Hero.css";
import Chatbot from "./Chatbot";
const Hero = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>  
    <div className="con">
      <div className="hero-content">
        {/* Language Switch */}
        <div className="language-buttons">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hi")}>हिंदी</button>
        </div>

        {/* Hero Heading */}
        <h1 className="hero-title">{t("explore_constitution")}</h1>

        {/* Download Button */}
        <a href=" https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf" target="_blank" rel="noopener noreferrer">
          <button className="hero-button">{t("download_constitution")}</button>
        </a>

        {/* Cards Section */}
        <div className="card-containes" style={{width:"80%" , margin:"auto"}}>
          {/* Row 1 */}
          <div className="card-row" style={{ display: "flex", justifyContent: "center", gap: "35px", marginBottom: "50px", flexWrap: "wrap" }}>
            <div className="card" style={{ flex: "0 1 45%" }}>
              <h2 className="card-title">{t("simplify_title")}</h2>
              <p>{t("simplify_desc")}</p>
              <a className="card-link" href="#">{t("read_more")}</a>
            </div>
            <div className="card" style={{ flex: "0 1 45%" }}>
              <h2 className="card-title">{t("gamified_title")}</h2>
              <p>{t("gamified_desc")}</p>
              <a className="card-link" href="#">{t("learn_more")}</a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="card-row" style={{ display: "flex", justifyContent: "center", gap: "35px", flexWrap: "wrap" }}>
            <div className="card" style={{ flex: "0 1 45%" }}>
              <h2 className="card-title">{t("judiciary_title")}</h2>
              <p>{t("judiciary_desc")}</p>
              <a className="card-link" href="#">{t("explore_now")}</a>
            </div>
            <div className="card" style={{ flex: "0 1 45%" }}>
              <h2 className="card-title">{t("write_title")}</h2>
              <p>{t("write_desc")}</p>
              <a className="card-link" href="#">{t("contribute")}</a>
            </div>
          </div>
        </div>

      </div>
     
    </div>
    <div className="hhh" style={{display:"none"}}><Chatbot></Chatbot></div>
  <Cons />
      <Contact></Contact></>
  );
};

export default Hero;
