import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
      <h1>Oooooops!</h1>
      <h6>You just hit a route that doesn't exist... the sadness. </h6>
      <br />
      <Link to="/">
        <h5 style={{ textDecoration: 'none !important', color: "#000"}}>
          Redirect me to https://www.shreysachdeva.com
        </h5>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
