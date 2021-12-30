
import {
  NavbarContainer,
  NavbarContainerWrapper,
  NavbarContainerLeft,
  NavbarContainerRight,
  NavbarContainerDropdown,
  NavbarContainerLinks,
  NavbarLinks,
  Logo,
  Hamburger

} from "./Navbar.style";
import DevLogo from '../../assets/img/logo.png';

NavbarContainer;
function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContainerWrapper>
        <NavbarContainerLeft>
          <NavbarContainerLinks>
            <NavbarLinks to="/">Home</NavbarLinks>
            <NavbarLinks to="/Projects">Projects</NavbarLinks>
            <NavbarLinks to="/About">About</NavbarLinks>
            <NavbarLinks to="/Contact">Contact</NavbarLinks>
            <Hamburger>&#8801;</Hamburger>
          </NavbarContainerLinks>
        </NavbarContainerLeft>
        <NavbarContainerRight>
            <Logo src={DevLogo}></Logo>
        </NavbarContainerRight>
      </NavbarContainerWrapper>
      <NavbarContainerDropdown></NavbarContainerDropdown>
    </NavbarContainer>
  );
}

export default Navbar;
