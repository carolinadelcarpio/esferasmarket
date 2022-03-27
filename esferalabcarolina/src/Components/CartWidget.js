const CartWidget = ({quantity}) => {
    console.log(quantity)

    return(
        <div>
        <img src="https://www.mcicon.com/wp-content/uploads/2021/02/Technology_3D_1-copy-2-600x600.jpg" width="100" height="100" alt="icon"/>
        {quantity}
        </div>
    )
}

export default CartWidget;