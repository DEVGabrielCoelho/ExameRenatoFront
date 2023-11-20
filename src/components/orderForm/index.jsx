import { useEffect, useState } from "react";
import { useOrderContext } from "../../context/orderContext";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const OrderForm = (props) => {
  const {
    handlePedidoFormChange,
    adicionarItemAoPedido,
    pedidoForm: { clienteId, itens },
    addPedido,
    showSuccessMessage,
    setShowSuccessMessage,
  } = useOrderContext();

  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [precoUnitario, setPrecoUnitario] = useState(0);

  const adicionarItem = () => {
    const novoItem = { produto, quantidade, precoUnitario };
    adicionarItemAoPedido(novoItem);
    setProduto("");
    setQuantidade(0);
    setPrecoUnitario(0);
  };
  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        props.actionPage(true);
      }, 1500);
    }
  }, [props, showSuccessMessage]);

  const excluirItem = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    handlePedidoFormChange({
      target: { name: "itens", value: novosItens },
    });
  };

  const enviarPedido = () => {
    const pedido = { clienteId, itens };
    addPedido(pedido);
    handlePedidoFormChange({
      target: { name: "clienteId", value: "" },
    });
    handlePedidoFormChange({
      target: { name: "itens", value: [] },
    });
  };

  function mascaraMoeda(event) {
    const onlyDigits = event.target.value
      .split("")
      .filter((s) => /\d/.test(s))
      .join("")
      .padStart(3, "0");
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    event.target.value = maskCurrency(digitsFloat);
  }

  function maskCurrency(valor, locale = "pt-BR", currency = "BRL") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(valor);
  }
  return (
    <Container>
      <Row>
        {showSuccessMessage && (
          <Alert
            variant="success"
            onClose={() => setShowSuccessMessage(false)}
            dismissible
          >
            Pedido cadastrado com sucesso!
          </Alert>
        )}
        <Col>
          <Form>
            <Form.Group controlId="formClienteId">
              <Form.Label>Cliente ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cliente ID"
                value={clienteId}
                onChange={handlePedidoFormChange}
                name="clienteId"
              />
            </Form.Group>
            <Form.Group controlId="formProduto">
              <Form.Label>Produto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Produto"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formQuantidade">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Preço Unitário</Form.Label>
              <Form.Control
                value={precoUnitario}
                type="text"
                placeholder="Insira um custo estimado"
                id="custo"
                onInput={mascaraMoeda}
                onChange={(e) => setPrecoUnitario(e.target.value)}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={adicionarItem}>
              Adicionar Item
            </Button>
          </Form>
        </Col>
        <Col>
          <Form.Label>Itens do Pedido:</Form.Label>
          <ul>
            {itens.map((item, index) => (
              <li key={index}>
                Produto: {item.produto}, Quantidade: {item.quantidade}, Preço
                Unitário: {item.precoUnitario}
                <Button variant="danger" onClick={() => excluirItem(index)}>
                  Excluir
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <br />
      <Button variant="success" onClick={enviarPedido}>
        Cadastrar Pedido
      </Button>
    </Container>
  );
};

export default OrderForm;
