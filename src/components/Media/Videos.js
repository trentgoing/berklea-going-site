import React from 'react';
import PropTypes from 'prop-types';

export const Videos = ({ videos }) => (
  <React.Fragment>
    {!!videos ? videos.map(({video}, index) => {
      let side = index === 0 ? '' : index % 2 === 0 ? 'right' : 'left';
      return(
        <div className="columns" key={video+index}>
          <div className="column is-12">
            <div className={`video-container ${side}`}>
            <iframe id="ytplayer" type="text/html" width="640" height="360" title={video + "video"}
              src={video}
            ></iframe>
            </div>
          </div>
        </div>
      )
      })
    : <div></div>}
  </React.Fragment>
);

Videos.propTypes = {
  videos: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Videos;
