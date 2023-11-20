import { OrderProvider } from "../../context/orderContext";
import OrderTable from "../../components/orderTable";
import OrderForm from "../../components/orderForm";
import Layout from "../../components/layout";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { ActionView, Button, ButtonView, Text } from "./styled";

const Order = () => {
  const [viewForm, setViewForm] = useState(true);

  const toggleView = () => {
    setViewForm(!viewForm);
  };

  return (
    <>
      <Layout>
        <OrderProvider>
          <Container>
            <ButtonView>
              <Text>Gerenciador de Pedidos</Text>
              <Button onClick={toggleView}>
                {!viewForm ? "Lista de Pedidos" : "Cadastrar Novo Pedido"}
              </Button>
            </ButtonView>
            <ActionView>
              {!viewForm ? (
                <OrderForm actionPage={toggleView} />
              ) : (
                <OrderTable />
              )}
            </ActionView>
          </Container>
        </OrderProvider>
      </Layout>
    </>
  );
};

export default Order;
