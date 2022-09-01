import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import {
    faChevronLeft,
    faChevronRight,
    faCheckSquare,
} from "@fortawesome/free-solid-svg-icons"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

import Seo from "../components/seo"

const options = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2>
                <FontAwesomeIcon icon={faCheckSquare} />
                {children}
            </h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <GatsbyImage
                image={node.data.target.gatsbyImageData}
                alt={
                    node.data.target.description
                        ? node.data.target.description
                        : node.data.target.title
                }
            />
        ),
    },
    renderText: text => {
        return text.split("\n").reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
}

const BlogpostTemp = ({ data, pageContext, location }) => (
    <Layout>
        <Seo
            pagetitle={data.contentfulBlogPost.title}
            pagedesc={`${documentToPlainTextString(
                JSON.parse(data.contentfulBlogPost.content.raw)
            ).slice(0, 70)}…`}
            pagepath={location.pathname}
            blogimg={`https:${data.contentfulBlogPost.eyecatch.file.url}`}
            pageimgw={data.contentfulBlogPost.eyecatch.file.details.image.width}
            pageimgh={data.contentfulBlogPost.eyecatch.file.details.image.height}
        />
        <div className="center" style={{ "marginTop": "7rem" }}>
            <GatsbyImage
                image={data.contentfulBlogPost.eyecatch.gatsbyImageData}
                alt={data.contentfulBlogPost.eyecatch.description}
            />
        </div>
        <article>
            <div className="center">
                <h1 className="center" style={{ "textAlign": "center" }}>{data.contentfulBlogPost.title}</h1>
                <aside className="cluster" style={{ "marginBottom": "3rem" }} >
                    <time dateTime={data.contentfulBlogPost.publishDate}>
                        <FontAwesomeIcon icon={faClock} />
                        {data.contentfulBlogPost.publishDateJP}
                    </time>
                    <div className="cluster" style={{ "gap": "initial" }}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <ul style={{ "display": "flex" }}>
                            {data.contentfulBlogPost.category.map(cat => (
                                <li className={cat.categorySlug} key={cat.id}>
                                    <Link to={`/cat/${cat.categorySlug}/`}>カテゴリー[{cat.category}]</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <div className="postbody">
                    {renderRichText(data.contentfulBlogPost.content, options)}
                </div>
                <ul className="postlink">
                    {pageContext.next && (
                        <li className="prev">
                            <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>{pageContext.next.title}</span>
                            </Link>
                        </li>
                    )}
                    {pageContext.previous && (
                        <li className="next">
                            <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                                <span>{pageContext.previous.title}</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </article>
    </Layout>
)

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY/MM/DD")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        gatsbyImageData(height:400)
        description
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
      }
      content {
        raw
        references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              gatsbyImageData(width:400 placeholder:BLURRED)
              title
              description
            }
          }
      }
    }
  }
`

export default BlogpostTemp
