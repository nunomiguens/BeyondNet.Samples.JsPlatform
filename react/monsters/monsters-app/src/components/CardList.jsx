import React from "react";
import PropTypes from "prop-types";
import "./CardList.styles.css";
import Card from "./Card";

const CardList = ({ items }) => {
  return (
    <div className='card-list'>
      {items.map(element => {
        return <Card key={element.id} {...element} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired
};

export default CardList;
