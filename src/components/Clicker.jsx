import React, { useState, useEffect } from 'react';
import Display from './Display';

function Clicker() {
  const [clickVal, setClickVal] = useState(null);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    const updateArr = () => setTotals((t) => [...t, clickVal]);
    updateArr();
  }, [clickVal]);

  const incClickHandler = (e) => {
    e.preventDefault();
    setClickVal((prevVal) => prevVal + 1);
  };
  const decClickHandler = (e) => {
    e.preventDefault();
    if (clickVal > 0) {
      setClickVal((prevVal) => prevVal - 1);
    }
  };

  return (
    <>
      <div className="Clicker">
        <button type="button" onClick={decClickHandler}>-</button>
        <div>{clickVal}</div>
        <button type="button" onClick={incClickHandler}>+</button>
      </div>
      <div className="Display">
        <Display numsArr={totals} />
      </div>
    </>
  );
}

export default Clicker;
