import React from "react"
import { Helmet } from "react-helmet";
import { loadFull } from "tsparticles"
import particlesOptions from "../particles-asset/particles2.json"
import Particles from "react-tsparticles"
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ children }) => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

      {children}

      <Footer />
    </>
  )
}


export default Layout
