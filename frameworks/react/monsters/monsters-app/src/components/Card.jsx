import React from "react";
import PropTypes from "prop-types";
import "./Card.styles.css";

function Card({ id, name, email }) {
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${id}?set=set2size=180x180`}
      />
      <h2 align='center'>{name}</h2>
      <p align='center'>{email}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Card;
