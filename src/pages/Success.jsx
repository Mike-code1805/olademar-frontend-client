import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { clearList } from "../redux/cartRedux";

import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  
  const data = location.state.stripeData;
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState();

  console.log(orderId);
  console.log(currentUser);
  console.log(data);
  console.log(cart)

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
        console.log(res);
        setOrderId(res.data._id);
        
      } catch {
        console.log("error en ordenes");
      }
    };  
    createOrder();
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
