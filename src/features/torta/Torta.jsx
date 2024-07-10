import { useSelector, useDispatch} from "react-redux"
import { order, restock } from "./tortaSlice"
import { useState } from "react"

const Torta = () => {
    const noOfTorta = useSelector((state) => state.torta.noOfTorta)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    return (
        <div>
            <h2>No of Tortas - {noOfTorta}</h2>
            <button onClick={() => dispatch(order())}>Order Torta </button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
            <button onClick={() => dispatch(restock(value))}>Restock Torta </button>
        </div>
    )
}

export default Torta
