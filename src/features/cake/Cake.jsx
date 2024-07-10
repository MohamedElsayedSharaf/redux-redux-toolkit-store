import { useSelector, useDispatch} from "react-redux"
import {order, restock} from './cakeSlice';

const Cake = () => { 
    const noOfCakes = useSelector((state) => state.cake.noOfCakes)
    const dispatch =  useDispatch()
    return (
        <div>
            <h2>No of cakes -{noOfCakes} </h2>
            <button onClick={() => dispatch(order())}>Order Cake </button>
            <button onClick={() => dispatch(restock(5))}>Restock Cake </button>
        </div>
    )
}

export default Cake
