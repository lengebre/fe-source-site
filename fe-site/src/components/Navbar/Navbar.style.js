import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #001219;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NavbarContainerWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
export const NavbarContainerLeft = styled.div`
  flex: 70%;
  display: flex;
  padding: 0 5px;
`;
export const NavbarContainerRight = styled.div`
  flex: 30%;
  justify-content: flex-end;
  display: flex;
  padding: 0 5px;
`;

export const NavbarContainerLinks = styled.div`
  display: flex;
`;

export const NavbarContainerDropdown = styled.div``;

export const NavbarLinks = styled(Link)`
  display: flex;
  font-size: 1.2rem;
  text-decoration: none;
  padding-left: 15px;
  margin: 25px 0;
  font-family: "Roboto", sans-serif;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: none;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 5px;
  height: auto;
  max-width: 80px;
  box-shadow: 1.3px 1.3px #fcbf49, -0.1em 0 0.3em #eae2b7;
`;

export const Hamburger = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 50px;
  cursor: pointer;
  padding: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`;
