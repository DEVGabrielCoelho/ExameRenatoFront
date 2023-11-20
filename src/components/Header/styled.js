import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  @media (max-width: 767px) {
    .brand-custom {
      text-align: center;
    }

    .navbar-brand {
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }

    .navbar-nav {
      text-align: center;
    }

    .nav-link {
      display: block;
      margin-bottom: 5px;
    }
  }
`;
