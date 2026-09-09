import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import SearchResults from "./Pages/SearchResults";
import ProtectedRoute from "./components/ProtectedRoute";
import FlashDeals from "./Pages/FlashDeals";
import Checkout from "./Pages/Checkout";
import MyOrders from "./Pages/MyOrders";
import OrderTracking from "./Pages/OrderTracking";
import Addresses from "./Pages/Addresses";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1B3022",
            color: "#fff",
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        {/* Auth pages - No Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        {/* Main pages - With Navbar/Footer */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductsPage />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="deals" element={<FlashDeals />} />
          <Route element={<ProtectedRoute />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="orders/:id" element={<OrderTracking />} />
            <Route path="addresses" element={<Addresses />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
