import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { urlBack } from "../../map/rotas";

const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const initialPedido = {
    clienteId: "",
    itens: [],
  };

  const [pedidos, setPedidos] = useState([]);
  const [pedidoForm, setPedidoForm] = useState(initialPedido);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get(urlBack + "pedidos");
      setPedidos(response.data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const addPedido = async (novoPedido) => {
    try {
      await axios.post(urlBack + "pedidos", novoPedido);
      fetchPedidos();
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao adicionar pedido:", error);
    }
  };

  const deletarPedido = async (pedidoId) => {
    try {
      await axios.delete(`${urlBack}pedidos`, { data: { id: pedidoId } });
      fetchPedidos();
      // Realiza alguma ação após a exclusão, se necessário
    } catch (error) {
      console.error("Erro ao deletar pedido:", error);
    }
  };

  const handlePedidoFormChange = (e) => {
    const { name, value } = e.target;
    setPedidoForm({
      ...pedidoForm,
      [name]: value,
    });
  };

  const adicionarItemAoPedido = (novoItem) => {
    setPedidoForm({
      ...pedidoForm,
      itens: [...pedidoForm.itens, novoItem],
    });
  };

  return (
    <OrderContext.Provider
      value={{
        pedidos,
        addPedido,
        deletarPedido,
        pedidoForm,
        handlePedidoFormChange,
        adicionarItemAoPedido,
        showSuccessMessage,
        setShowSuccessMessage,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
