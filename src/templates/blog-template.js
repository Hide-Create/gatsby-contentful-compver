import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import Seo from "../components/seo"
import * as styles from "../components/deco.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const BlogTemp = ({ data, location, pageContext }) => (
    <Layout>
        <Seo
            pagetitle="ブログ"
            pagedesc="Hidden_Outsiderのブログです"
            pagepath={location.pathname}
        />
        <section style={{ "marginTop": "7rem" }} >
            <div className="center">
                <div className="stack">
                    <h2 className={styles.normalTextShadow} style={{ "marginTop": "2rem" }} >RECENT POSTS</h2>
                    <div className="grid">
                        {data.allContentfulBlogPost.edges.map(({ node }) => (
                            <article className="post" key={node.id}>
                                <Link to={`/blog/post/${node.slug}/`}>
                                    <div className="frame">
                                        <GatsbyImage
                                            image={node.eyecatch.gatsbyImageData}
                                            alt={node.eyecatch.description}
                                        />
                                    </div>
                                    <p style={{ "textAlign": "center" }}>{node.title}</p>
                                </Link>
                            </article>
                        ))}
                    </div>

                    <ul className="pagenation">
                        {!pageContext.isFirst && (
                            <li>
                                <Link
                                    to={
                                        pageContext.currentPage === 2
                                            ? `/blog/`
                                            : `/blog/${pageContext.currentPage - 1}/`
                                    }
                                    rel="prev"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                    <span>前のページ</span>
                                </Link>
                            </li>
                        )}
                        {!pageContext.isLast && (
                            <li className="next">
                                <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                                    <span>次のページ</span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(aspectRatio:1.78,height:200)
            description
          }
        }
      }
    }
  }
`;

export default BlogTemp
