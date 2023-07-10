import React from 'react'
import { useState } from 'react';
import styles from 'styled-components'
import carrito from '../../assets/carrito-de-compras.png'

function CartWidget() {
      const [contador, setcontador] = useState(0);

    return (
        <EstiloCar>
        <h3>{contador}</h3>
        <img src={carrito} alt="Carrito" />
        </EstiloCar>
  )
}

export default CartWidget

const EstiloCar = styles.div `
display:flex;
img{
  width: 70px;}
` 