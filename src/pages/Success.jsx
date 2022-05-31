import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { clearList } from "../redux/cartRedux";

import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();

  }, [cart, data, currentUser]);

  const history = useHistory();
  const dispatch = useDispatch();

  const gotoHomeAndHandleClearList = () => { 
    dispatch(clearList());
    history.push('/')
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `El pedido se ha creado con éxito. tu numero de orden es ${orderId}`
        : `¡Pago exitoso! Tu pedido está siendo preparado...`}
      <button onClick={gotoHomeAndHandleClearList} style={{ padding: 10, marginTop: 20 }}>Ir al Inicio</button>
    </div>
  );
};

export default Success;
