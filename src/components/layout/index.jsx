import Header from "../Header";
import { Container, Footer, Main, TextFooter } from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />

        <Main>{children}</Main>

        <Footer>
          <TextFooter>Direitos autorais © 2023</TextFooter>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
