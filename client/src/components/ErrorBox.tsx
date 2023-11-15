import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import errorImage from "../assets/images/zoinks-scooby-doo.gif";

export default function ErrorBox() {
  return (
    <StyledContainer>
      <h1>Ruh Roh Rhaggy!</h1>
      <img src={errorImage} />
      <h4>Look's like something's gone wrong</h4>
      <h5>
        click <Link to="/">HERE</Link> to return home
      </h5>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
