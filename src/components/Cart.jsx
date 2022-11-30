import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (orderId && cart.length > 0) {
      clearCart();
    }
  }, [cart.length, orderId, clearCart]);

  function handleClickBuyButton() {
    const pedido = {
      comprador: { nombre: nombre, tel: telefono, email: email },
      carrito: cart,
      total: totalPrice(),
    };
    const db = getFirestore();
    const pedidos = collection(db, "pedidos");
    addDoc(pedidos, pedido).then(({ id }) => {
      setOrderId(id);
    });
  }
  return (
    <>
      {orderId ? (
        <>
          <h2>Gracias por tu compra! Tu código de orden es : {orderId}</h2>
        </>
      ) : (
        <>
          {cart.length === 0 ? (
            <>
              <h3>No hay elementos en el carrito</h3>
              <Link to="/" className="linkCarrito">
                Hacer compras
              </Link>
            </>
          ) : (
            <div>
              {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
              ))}
              <h2 className="precioTotal">Total: ${totalPrice()}</h2>
              <Container maxWidth="md">
                <Grid container>
                  <Grid>
                    <FormControl>
                      <InputLabel htmlFor="nombre">Nombre</InputLabel>
                      <Input
                        id="nombre"
                        type="nombre"
                        aria-describedby="nombre-helper"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      ></Input>
                      <FormHelperText id="nombre-helper">
                        Nombre y Apellido
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl>
                      <InputLabel htmlFor="telefono">Contacto</InputLabel>
                      <Input
                        id="telefono"
                        type="telefono"
                        aria-describedby="telefono-helper"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                      ></Input>
                      <FormHelperText id="telefono-helper">
                        Telefono
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Input
                        id="email"
                        type="email"
                        aria-describedby="email-helper"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Input>
                      <FormHelperText id="email-helper">Email</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Button variant="contained" onClick={handleClickBuyButton}>
                    Comprar
                  </Button>
                </Grid>
              </Container>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
