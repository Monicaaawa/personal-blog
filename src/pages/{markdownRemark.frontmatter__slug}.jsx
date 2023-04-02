import * as React from "react"
import { graphql, Link } from "gatsby"
import Container from '@mui/material/Container'
import '../styles/blogs.css'

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container maxWidth="lg">
      <div className="blogContent">
        <Link to='/' style={{color: "#F07167"}}>Back</Link>
        <div>
          <h1 className="blogTitle">{frontmatter.title}</h1>
          <p>{frontmatter.date} by Shiyu</p>
          <br></br>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <br></br>
        <Link to='/' style={{color: "#F07167"}}>Back</Link>
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`