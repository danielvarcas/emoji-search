import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => (
  <React.Fragment>
    <form>
      <input type="text" name="search" onChange={onChange} />
    </form>
  </React.Fragment>
)

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchBar;