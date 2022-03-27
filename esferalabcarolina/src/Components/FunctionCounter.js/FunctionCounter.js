import { useState } from "react"
const FunctionCounter = (props) => {
    console.log(props.initial)
    console.log(useState)
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(5)
    
    //console.log(myState)
    // me brinda un array
    console.log(count)
    console.log(setCount)

        const increment = () => {
            setStock(stock);
            setCount(count+1);
        }


        const decrement = () => {
            setCount(count-1);
            setStock(stock)
        }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick= {increment.count<stock}>+</button>
        </div>
    )
}

export default FunctionCounter;