import React from 'react';
import PropTypes from 'prop-types';

function Navbar({title}) {
  
    return (
      <nav className="navbar bg-primary">
        <h1>{title}</h1>
      </nav>
    )
}

Navbar.defaultProps = {
  title: 'GitHub Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar
