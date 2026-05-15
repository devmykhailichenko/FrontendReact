import { useDispatch, useSelector } from "react-redux";

import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    resetCounter
} from "../../store/slices/counterSlice.js";

export default function Counter() {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);
    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div>
            <h1>Counter</h1>

            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={() => {dispatch(incrementByAmount(5))}}>Increment + 5</button>
            <button onClick={() => {dispatch(decrementByAmount(5))}}>Increment + 5</button>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <span>{value}</span>
            <button onClick={() => {dispatch(resetCounter()) }}>Reset</button>
        </div>
    )
}