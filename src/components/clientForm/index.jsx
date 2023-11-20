import { useEffect } from "react";
import { useClientContext } from "../../context/clientContext";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import InputMask from "react-input-mask";
import { ContainerLabel, ViewButton } from "./styled";

const FormClient = (props) => {
  const {
    clientForm,
    handleFormChange,
    handleSubmit,
    showSuccessMessage,
    setShowSuccessMessage,
  } = useClientContext();

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        props.actionPage(true);
      }, 1500);
    }
  }, [props, showSuccessMessage]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h2>Cadastro de Cliente</h2>
        {showSuccessMessage && (
          <Alert
            variant="success"
            onClose={() => setShowSuccessMessage(false)}
            dismissible
          >
            Cliente cadastrado com sucesso!
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Col md={6}>
            <ContainerLabel>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome"
                  name="nome"
                  value={clientForm.nome}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </ContainerLabel>
            <ContainerLabel>
              <Form.Group controlId="formEndereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o endereço"
                  name="endereco"
                  value={clientForm.endereco}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </ContainerLabel>
          </Col>
          <Col md={6}>
            <ContainerLabel>
              <Form.Group controlId="formTelefone">
                <Form.Label>Telefone</Form.Label>
                <InputMask
                  mask="+55 (99) 99999-9999"
                  maskChar="_"
                  alwaysShowMask={true}
                  className="form-control"
                  name="telefone"
                  value={clientForm.telefone}
                  onChange={handleFormChange}
                >
                  {(inputProps) => <Form.Control {...inputProps} />}
                </InputMask>
              </Form.Group>
            </ContainerLabel>
            <ContainerLabel>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite o email"
                  name="email"
                  value={clientForm.email}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </ContainerLabel>
          </Col>

          <Col>
            <ViewButton>
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </ViewButton>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default FormClient;
