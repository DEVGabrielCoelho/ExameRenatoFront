import { ClientProvider } from "../../context/clientContext";
import FormClient from "../../components/clientForm";
import TableClient from "../../components/clientTable";
import Layout from "../../components/layout";
import { Container } from "react-bootstrap";
import { ActionView, Button, ButtonView, Text } from "./styled";
import { useState } from "react";

const Client = () => {
  const [viewForm, setViewForm] = useState(true);

  const toggleView = () => {
    setViewForm(!viewForm);
  };

  return (
    <>
      <Layout>
        <ClientProvider>
          <Container>
            <ButtonView>
              <Text>Gerenciador de Clientes</Text>
              <Button onClick={toggleView}>
                {!viewForm ? "Lista de Clientes" : "Cadastrar Novo Cliente"}
              </Button>
            </ButtonView>
            <ActionView>
              {!viewForm ? (
                <FormClient actionPage={toggleView} />
              ) : (
                <TableClient />
              )}
            </ActionView>
          </Container>
        </ClientProvider>
      </Layout>
    </>
  );
};

export default Client;
