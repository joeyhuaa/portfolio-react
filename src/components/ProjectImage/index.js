import React from "react";
import styled from "styled-components";


class ProjectImage extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <ImageASSETsmallSIZEDefaultSTATEDEFA
        style={{ backgroundImage: `url(${src})` }}
      ></ImageASSETsmallSIZEDefaultSTATEDEFA>
    );
  }
}

const ImageASSETsmallSIZEDefaultSTATEDEFA = styled.div`
  width: 344px;
  height: 234px;
  margin-right: 2px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default ProjectImage;
