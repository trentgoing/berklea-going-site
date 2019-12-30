import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ResumePageTemplate = ({resume_image, headshot_image, resume_pdf}) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 style={{
                    color: `black`,
                    textDecoration: `none`,
                    fontFamily: `Verdana`,
                    letterSpacing: `0.15em`,
                    fontSize: '4.5vw',
                    // textAlign: 'center',
                    marginTop: `10px`,
                    left: `50%`,
                    width: `75%`,
                    fontWeight: `bold`,
                    textTransform: `uppercase`
                  }}>
              Resume
            </h1>
          </div>
        </div>
          <div className="columns">
            <div className="column is-6">
              <div>
                <a href={resume_pdf.publicURL}  target="_blank" ><PreviewCompatibleImage imageInfo={{image:resume_image}} /></a>
              </div>
            </div>
            <div className="column is-6">
              <div className="headshot-wrapper" style={{
                    position: `relative`,
                    marginTop: `50%`,
                    transform: `translate(0px, -50%)`}}>
                <PreviewCompatibleImage imageInfo={{image: headshot_image}} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-offset-1 is-10 ">
              <a href={resume_pdf.publicURL} target="_blank" className="redirect-button three">
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