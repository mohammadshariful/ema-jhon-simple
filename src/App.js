import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
