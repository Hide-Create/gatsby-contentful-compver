import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as styles from "../components/deco.module.css"
import {
    faTwitter,
    faInstagram,
    faCodepen
} from "@fortawesome/free-brands-svg-icons"
import {
    faBook,
    faLaptopCode,
    faUtensilSpoon,
    faPen,
    faRoute
} from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(
      sort: { order:DESC, fields: publishDate }
      skip: 0
      limit: 3
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(aspectRatio:1.78)
            description
          }
        }
      }
    }
  }
  `)
    return (
        <footer style={{ "backgroundColor": "rgba(99, 52, 94, 0.5)", "marginTop": "5rem", "borderTop": "1px solid #fff" }}>
            <div className="switcher">
                <div className="box">
                    <div className="stack">
                        <h2 className={styles.headerShadow}>RECENT POSTS</h2>
                        {data.allContentfulBlogPost.edges.map(({ node }) => (
                            <article key={node.id}>
                                <Link to={`/blog/post/${node.slug}/`} className="with-sidebar">
                                    <div className="frame">
                                        <GatsbyImage
                                            image={node.eyecatch.gatsbyImageData}
                                            alt={node.eyecatch.description}
                                        />
                                    </div>
                                    <p style={{ "minWidth": "initial", "textAlign": "left" }}>{node.title}</p>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="box">
                    <ul className="stack">
                        <h2 className={styles.headerShadow}>BLOG CATEGORIES</h2>
                        <Link to="/cat/book review/" ><li style={{ "textAlign": "left" }} ><FontAwesomeIcon icon={faBook} />書評</li></Link>
                        <Link to="/cat/discussion/" ><li style={{ "textAlign": "left" }}><FontAwesomeIcon icon={faPen} />考察</li></Link>
                        <Link to="/" ><li style={{ "textAlign": "left" }}><FontAwesomeIcon icon={faRoute} />日常</li></Link>
                        <Link to="/cat/programming/" ><li style={{ "textAlign": "left" }}><FontAwesomeIcon icon={faLaptopCode} />プログラミング</li></Link>
                        <Link to="/cat/outsider/" ><li style={{ "textAlign": "left" }}><FontAwesomeIcon icon={faEye} />アウトサイダー</li></Link>
                        <Link to="/" ><li style={{ "textAlign": "left" }}><FontAwesomeIcon icon={faUtensilSpoon} />料理</li></Link>
                    </ul>
                </div>
                <div className="box">
                    <div className="stack">
                        <h2 className={styles.headerShadow}>SNS</h2>
                        <ul className="switcher" style={{ "fontSize": "3rem", "--threshold": "initial" }}>
                            <li>
                                <a href="https://twitter.com/Q4jIVKEacBmE1cH" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} style={{ "marginRight": "initial", "color": "#5972be" }} />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hideakikotani/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} style={{ "marginRight": "initial", "color": "#d15b40" }} />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://codepen.io/hide-create" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faCodepen} style={{ "marginRight": "initial" }} />
                                    <span className="sr-only">Codepen</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p style={{ "textAlign": "center" }} >© 2022 Kotani Hideaki.</p>
        </footer>
    )
}

export default Footer
