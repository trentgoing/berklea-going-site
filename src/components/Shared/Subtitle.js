import React from 'react';
import PropTypes from 'prop-types';

export const Subtitle = ({ title }) => (
  <div className="columns">
    <div className="column is-12">
      <h2 className="subtitle">
        {title}
      </h2>
    </div>
  </div>
);

Subtitle.propTypes = {
  title: PropTypes.string,
};

export default Subtitle;
