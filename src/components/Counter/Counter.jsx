import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "../../store/counter/counterActions.js";

export default function Counter() {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    return (
        <div>
            <h1>Counter</h1>

            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={() => {dispatch(increment(5))}}>Increment + 5</button>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <span>{value}</span>
            <button onClick={() => {dispatch(reset()) }}>Reset</button>
        </div>
    )
}