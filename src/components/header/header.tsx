import * as React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Row,
  Col,
  Container,
} from 'reactstrap';
import Logo from '../../assets/img/logo.png';

interface IHeaderProps {
}
 
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
      <Container>
        <Navbar className="justify-content-center" style={{
          height: '120px',
        }}>
            <NavbarBrand href="/">
            <img src={Logo} height="70" alt="logo"/>
            </NavbarBrand>
        </Navbar>
      </Container>
    );
  }

export default Header;