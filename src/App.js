import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/chekout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import setCurrentUser from "./store/user/user.action";
import setCategoriesMap from "./store/categories/categories.action";
import {updateCartItemsReducer} from "./store/cart/cart.action";

const App = () => {
  const dispatch = useDispatch();
  // User
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      try {
        dispatch(setCurrentUser(user));
      } catch (error) {
        console.log(error);
      }
    });

    return unsubscribe;
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
