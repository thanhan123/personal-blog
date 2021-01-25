import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi World</h1>
    <p>My name is An and welcome to my blog.</p>
    <p>My blog is about software development.</p>
  </Layout>
)

export default IndexPage
