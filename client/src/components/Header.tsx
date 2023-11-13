import styled from "styled-components";
import logo from "../assets/images/Sunset Daydreams-pink@3x.png";
import backgroundImage from "../assets/images/background.jpg";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <StyledContainer>
      <div className="logo">
        <Link to="/">
          <img className="logoImage" src={logo} />
        </Link>
      </div>

      <MenuBar />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  width: 100%;
  background-image: url("${backgroundImage}");
  top: 0 !important;

  .logoImage {
    width: 20%;
    position: relative;
    margin: auto;
  }
`;
