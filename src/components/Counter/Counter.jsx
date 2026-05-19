import { useDispatch, useSelector } from "react-redux";

import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    resetCounter
} from "../../store/slices/counterSlice.js";

import styles from "./Counter.module.css";

export default function Counter() {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    return (
        <div className={styles.counter}>
            <h1 className={styles.header}>Counter</h1>

            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={() => {dispatch(incrementByAmount(5))}}>Increment + 5</button>
            <button onClick={() => {dispatch(decrementByAmount(5))}}>Increment + 5</button>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <span>{value}</span>
            <button onClick={() => {dispatch(resetCounter()) }}>Reset</button>
        </div>
    )
}