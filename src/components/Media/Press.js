import React from 'react';
import PropTypes from 'prop-types';

export const Press = ({ press }) => (
  <div className="section">
    {!!press ? press.map((article, index) => {
      return (
        <div className="columns" key={article + index}>
          <div className="column is-12">
            <div>
              <a href={article.link}>
                <h3 style={{
                  fontFamily: `Verdana`,
                  letterSpacing: `0.05em`,
                  fontSize: '1.5vw',
                  marginTop: `10px`,
                  fontWeight: `bold`,
                  textTransform: `uppercase`
                }}>
                  {article.title}
                </h3>
              </a>
              <p>{article.description}</p>
            </div>
          </div>
        </div>
      )
    }): <div></div>}
  </div>
);

Press.propTypes = {
  press: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Press;
