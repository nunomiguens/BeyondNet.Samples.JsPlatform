import React from "react";
import PropTypes from "prop-types";
import "./SearchBox.css";

const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <div align='center'>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

Searchbox.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Searchbox;
