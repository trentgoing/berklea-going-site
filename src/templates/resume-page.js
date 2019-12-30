import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Shared/Layout'
import PreviewCompatibleImage from '../components/Shared/PreviewCompatibleImage'
import PageTitle from '../components/Shared/PageTitle'

export const ResumePageTemplate = ({resume_image, headshot_image, resume_pdf}) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <PageTitle title="Resume" />
        <div className="columns">
          <div className="column is-6">
            <a href={resume_pdf.publicURL}  target="_blank" rel="noopener noreferrer" >
              <PreviewCompatibleImage imageInfo={{image:resume_image}} />
            </a>
          </div>
          <div className="column is-6">
            <div className="headshot-wrapper">
              <PreviewCompatibleImage imageInfo={{image: headshot_image}} />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1 is-10 ">
            <a href={resume_pdf.publicURL} target="_blank" rel="noopener noreferrer" className="redirect-button three">
              <div style={{ margin: `auto`, textTransform: `uppercase`}}>
                DOWNLOAD
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

ResumePageTemplate.propTypes = {
  resume_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  resume_pdf: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headshot_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ResumePageTemplate
        headshot_image={frontmatter.headshot_image}
        resume_image={frontmatter.resume_image}
        resume_pdf={frontmatter.resume_pdf}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResumePage

export const resumePageQuery = graphql`
  query ResumePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "resume-page" } }) {
      html
      frontmatter {
        resume_pdf {
          publicURL
        }
        resume_image {
          childImageSharp {
            fluid(maxHeight: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headshot_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`