import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrese, increse } from '../../../Redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()

    const CounterVal = useSelector(state => state.counter);
    console.log(CounterVal);

    const handleInce = () => {
        dispatch(increse())
    }

    const handleDece = () => {
        dispatch(decrese())
    }

    return (
        <div>
            <button onClick={handleInce}>+</button>
            {CounterVal.count}
            <button onClick={handleDece}>-</button>
        </div>
    );
}

export default Counter;