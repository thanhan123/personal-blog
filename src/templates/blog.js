import React from "react"
import Layout from "../components/layout"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span className={blogStyles.bold}>{text}</span>,
  },
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: node => {
        const title = node.data.target.fields.title["en-US"]
        const slug = node.data.target.fields.slug["en-US"]
        return (
            <Link to={`/blog/${slug}`}>{title}</Link>
        )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
        const title = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return (
            <img src={url} alt={title}></img>
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

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = (props) => {
      return (
        <Layout>
          <SEO title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
      )
}

export default BlogTemplate;