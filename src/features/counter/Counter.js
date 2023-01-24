import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount,
} from './counterSlice';
import styled from 'styled-components';

const StyledCounter = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 60px;
      margin: 20;
    }

    button {
      font-size: 30px;
      margin: 10px 0;
    }

    input {
      font-size: 20px;
      text-align: center;
    }
`;

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleIncrementByNumber = () => dispatch(incrementByAmount(addValue));
  const handleReset = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <StyledCounter>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <input 
        type="text" 
        value={incrementAmount} 
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={handleIncrementByNumber}>Add amount</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </StyledCounter> 
  );
}
 
export default Counter;