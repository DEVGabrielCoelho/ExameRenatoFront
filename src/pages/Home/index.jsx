import Layout from "../../components/layout";
import chefPizzaria from "../../assets/pizza.png";
import { Container } from "./styled";

const Home = () => {
  return (
    <>
      <Layout>
        <Container>
          <img src={chefPizzaria} alt="Logo" width={400} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
