import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Button = ({ buttonLink, buttonTitle, backgroundColor }) => (
  <Link to={buttonLink} className={'redirect-button ' + backgroundColor}>
    <div style={{ margin: `auto`, textTransform: `uppercase`}}>
      { buttonTitle }
    </div>
  </Link>
)

Button.propTypes = {
  buttonLink: PropTypes.string, 
  buttonTitle: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Button.defaultProps = {
  buttonLink: `/`,
  buttonTitle: `Home`,
  backgroundColor: `rgba(20, 104, 168, 1)`,
}

export default Button
