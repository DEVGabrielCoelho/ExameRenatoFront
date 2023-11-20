import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/clientes" Component={Client} />
          <Route path="/pedidos" Component={Order} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
