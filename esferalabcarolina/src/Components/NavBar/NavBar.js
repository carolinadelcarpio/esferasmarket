import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from "../CartWidget";
const   NavBar = () =>{
    return(
        <nav>
            <CartWidget />
            <button type="button" class="btn btn-primary">Home</button>
            <button type="button" class="btn btn-primary">Servicios</button>
            <button type="button" class="btn btn-primary">Cuenta</button>
            <button type="button" class="btn btn-primary">Carrito</button>
        </nav>
    )
}

export default NavBar;
