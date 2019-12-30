import React from 'react';
import PropTypes from 'prop-types';

export const PageTitle = ({ title }) => (
  <div className="columns">
    <div className="column is-10 is-offset-1">
      <h1 className="pagetitle">
        {title}
      </h1>
    </div>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
