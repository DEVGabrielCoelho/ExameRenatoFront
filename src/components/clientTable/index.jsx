import { useClientContext } from "../../context/clientContext";
import { Table } from "react-bootstrap";

const TableClient = () => {
  const { clientList } = useClientContext();

  return (
    <div>
      <h2>Tabela de Clientes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableClient;
