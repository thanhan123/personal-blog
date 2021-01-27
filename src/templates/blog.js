import React from "react"
import Layout from "../components/layout"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import SEO from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../components/layout.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fluid(maxWidth: 600) {
              src
            }
          }
          ... on ContentfulBlogPost {
            contentful_id
            __typename
            slug
            title
          }
          ... on ContentfulCodeSnippet {
            contentful_id
            __typename
            code {
              code
            }
            programmingLanguage
          }
        }
      }
    }
  }
`

const BlogTemplate = (props) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <span className={blogStyles.bold}>{text}</span>,
    },
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: node => {
          const title = node.data.target.title
          const slug = node.data.target.slug
          return (
              <Link to={`/blog/${slug}`}>{title}</Link>
          )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
          const title = node.data.target.title
          const url = node.data.target.fluid.src
          return (
              <img src={url} alt={title}></img>
          )
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        let code = node.data.target.code.code
        let pl = node.data.target.programmingLanguage
        return (
          <SyntaxHighlighter
            language={pl}
            style={obsidian}
            showLineNumbers>
            {code}
          </SyntaxHighlighter>
        )
      },
      [BLOCKS.QUOTE]: (node) => {
          const text = node.content[0].content[0].value
          return (
              <blockquote>
                  <p>{text}</p>
              </blockquote>
          )
      },
    },
  }
  
      return (
        <Layout>
          <SEO title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
      )
}

export default BlogTemplate;