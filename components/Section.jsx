import PropTypes from 'prop-types';
import React from 'react';

export default function Section({ children, autor, name, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {<h3>{name}</h3>}
      {<h3>{autor}</h3>}
      {<p>{React.Children.count(children)}</p>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
