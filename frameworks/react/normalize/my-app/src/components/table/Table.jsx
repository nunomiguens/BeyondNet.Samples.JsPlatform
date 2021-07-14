import React from "react";
import PropTypes from "prop-types";
import "./Table.styles";
import { Root, Row } from "./Table.styles";

const Table = ({ arrayItems, hashItems }) => {
  return (
    <Root>
      <Row>
        {arrayItems.map(item => (
          <span>
            {item[0]}, {item[1]}
          </span>
        ))}
      </Row>
      <Row>{JSON.stringify(hashItems)}</Row>
    </Root>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired
};

export default Table;
