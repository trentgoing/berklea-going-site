import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.role} className="column is-4" style={{padding: `0px`}}>
        <section className="section tiles">
          <div
            style={{
              width: '100%',
              display: 'inline-block',
              overflow: `hidden`,
              position: `relative`
            }}
          >
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="gallery-picture-info">
              <div style={{padding: `30px`}}>
                <p className="has-text-weight-bold is-size-4-mobile is-size-4-tablet is-size-4-widescreen"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  fontFamily: `Verdana`,
                  letterSpacing: `0.15em`,
                  width: `75%`,
                  fontWeight: `bold`,
                  textTransform: `uppercase`,
                  marginBottom: `0px`
                }}>
                  {item.show_title}
                </p>
                <p className="has-text-weight-bold is-size-7-mobile is-size-7-tablet is-size-7-widescreen"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: `Verdana`,
                    letterSpacing: `0.15em`,
                    width: `75%`,
                    fontWeight: `bold`,
                    // fontSize: '5.5vw',
                    textTransform: `uppercase`,
                    marginBottom: `0px`
                }}>
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
