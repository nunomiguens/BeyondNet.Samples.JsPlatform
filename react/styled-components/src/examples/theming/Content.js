import React from "react";
import styled from "styled-components";
const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        magnam vero, repellat perspiciatis culpa rem, harum earum veniam
        blanditiis cum, nemo dicta voluptate voluptatem quas iste nulla
        doloribus possimus adipisci.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${props => `background:${props.theme.secondaryColor}`};
  ${props => `color:${props.theme.primaryColor}`};
`;
