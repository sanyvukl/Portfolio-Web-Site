import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/chekout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCurrentUserAsync } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  // User
  useEffect(() => {
    dispatch(fetchCurrentUserAsync());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
