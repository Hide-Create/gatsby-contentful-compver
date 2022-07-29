import React from "react"
import { Link } from "gatsby"
import * as styles from "./deco.module.css"

const Header = () => (
  <header className="box" style={{ "margin": "0", "fontFamily": " 'Major Mono Display', monospace" }}>
    <div className="switcher">
      <div className="center">
        <div>
          <Link to={`/`}>
            <h1 className={styles.headerShadow} style={{ "textAlign": "center" }}>HIddeN OutsIdeR</h1>
          </Link>
        </div>
      </div>
      <div className="cover">
        <ul className="cluster">
          <li className={styles.normalTextShadow}>
            <Link to="/" >TOP</Link>
          </li>
          <li className={styles.normalTextShadow}>
            <Link to={`/about/`}>ABOUT</Link>
          </li>
          <li className={styles.normalTextShadow}>
            <Link to={`/blog/`}>BLOG</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
