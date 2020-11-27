import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewCalculation = () => {
  const [text] = useState('');
  const [amount, setAmount] = useState(0);

  const { NewCalculation } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    NewCalculation(newTransaction);
  }

  return (
    <>
     <div class="container mt-5 d-flex justify-content-center align-items-center">
      <h3>What is your annual income ?</h3>
      </div>
      <div class="container mt-5 d-flex justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Calculate your tax 2020/2021</button>
      </form>
      </div>
    </>
  )
}

