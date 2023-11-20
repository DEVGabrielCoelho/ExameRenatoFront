import React, { useState } from "react";
import { useOrderContext } from "../../context/orderContext";
import { Table } from "react-bootstrap";
import { Button, ButtonDel, ViewButton } from "./styled";

const OrderTable = () => {
  const { pedidos, deletarPedido } = useOrderContext();
  const [showItems, setShowItems] = useState([]);

  const toggleItems = (pedidoId) => {
    if (showItems.includes(pedidoId)) {
      setShowItems(showItems.filter((id) => id !== pedidoId));
    } else {
      setShowItems([...showItems, pedidoId]);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID do Pedido</th>
            <th>ID do Cliente</th>
            <th>Itens</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <React.Fragment key={pedido.id}>
              <tr>
                <td>{pedido.id}</td>
                <td>{pedido.clienteId}</td>
                <td>
                  <ViewButton>
                    <Button onClick={() => toggleItems(pedido.id)}>
                      {showItems.includes(pedido.id)
                        ? "Ocultar Itens"
                        : "Mostrar Itens"}
                    </Button>
                    <ButtonDel onClick={() => deletarPedido(pedido.id)}>
                      Deletar Pedido
                    </ButtonDel>
                  </ViewButton>
                </td>
              </tr>
              {showItems.includes(pedido.id) && (
                <tr>
                  <td colSpan="3">
                    <ul>
                      {pedido.itensDoPedido.map((item, index) => (
                        <li key={`${item.pedidoId}-${item.produto}-${index}`}>
                          Produto: {item.produto}, Quantidade: {item.quantidade}
                          , Preço Unitário: {item.precoUnitario}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderTable;
