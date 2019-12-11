import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const MediaPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                title
              </h2>
              {/* <PageContent className="content" content={content} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

MediaPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MediaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MediaPageTemplate
        // contentComponent={HTMLContent}
        // title={post.frontmatter.title}
        // content={post.html}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MediaPage

export const mediaPageQuery = graphql`
  query MediaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
