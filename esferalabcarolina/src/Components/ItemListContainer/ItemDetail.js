import React, { useState } from 'react';
const ItemDetail =()=> {
        const[products,setProducts]=useState ([
                {id: 1, Nombre: 'AA', Unidades: 1, Precio: 5, Imagen: <img src='images/imag1.PNG' alt='1'></img>},
                {id: 2, Nombre: 'AB', Unidades: 5, Precio: 15, Imagen: <img src='images/imag2.PNG'alt='2'></img>},
                {id: 3, Nombre: 'AC', Unidades: 12, Precio: 25, Imagen: <img src='images/imag3.PNG' alt='3'></img>},
        ])
        return <ul>
        {products.map(u => <li key={u.id}>{u.Nombre}</li>)}
        {products.map(u => <li key={u.id}>{u.Unidades}</li>)}
        {products.map(u => <li key={u.id}>{u.Precio}</li>)}
        {products.map(u => <li key={u.id}><img alt='0'>{u.Imagen}</img></li>)}
        </ul>
}

export default ItemDetail;