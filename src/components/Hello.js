import React from "react"

const Hello = ({title, main_image, subheading}) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${
        !!main_image.childImageSharp && !!main_image ? main_image.childImageSharp.fluid.src : main_image
      })`
    }}
  >
    <h1 style={{
            position: `absolute`,
            color: `white`,
            textDecoration: `none`,
            fontFamily: `Verdana`,
            letterSpacing: `0.28em`,
            fontSize: '5.5vw',
            textAlign: 'center',
            // top: `20%`,
            left: `50%`,
            width: `75%`,
            transform: `translate(-50%, -100%)`,
            fontWeight: `bold`,
            textTransform: `uppercase`
          }}>
      {title}
    </h1>
    <h3 className="has-text-weight-bold is-size-4-widescreen" // is-size-5-mobile is-size-5-tablet "
        style={{
            position: `absolute`,
            color: `white`,
            textDecoration: `none`,
            fontFamily: `georgia`,
            textAlign: 'center',
            // top: `35%`,
            left: `50%`,
            // fontSize: '2.0vw',
            transform: `translate(-50%, -50%)`
          }}>
      <em>{subheading}</em>
    </h3>
  </div>
)

export default Hello
