import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { urlBack } from "../../map/rotas";

const ClientContext = createContext();

export const useClientContext = () => {
  return useContext(ClientContext);
};

export const ClientProvider = ({ children }) => {
  const [clientForm, setClientForm] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  const [clientList, setClientList] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const fetchClients = async () => {
    try {
      const response = await axios.get(urlBack + "clientes");
      setClientList(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setClientForm({ ...clientForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(urlBack + "clientes", clientForm);
      setShowSuccessMessage(true);
      fetchClients();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
    setClientForm({
      nome: "",
      endereco: "",
      telefone: "",
      email: "",
    });
  };

  return (
    <ClientContext.Provider
      value={{
        clientForm,
        clientList,
        handleFormChange,
        handleSubmit,
        showSuccessMessage,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
