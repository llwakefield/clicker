import React, { useState, useEffect } from 'react';
import Display from './Display';

function Clicker() {
  const [clickVal, setClickVal] = useState(null);
  const [valHistory, setValHistory] = useState([]);

  useEffect(() => {
    setValHistory((prevVal) => [...prevVal, clickVal]);
  }, [clickVal]);

  const incClickHandler = (e) => {
    e.preventDefault();
    setClickVal(clickVal + 1);
  };
  const decClickHandler = (e) => {
    e.preventDefault();
    if (clickVal > 0) {
      setClickVal(clickVal - 1);
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
        <Display valHistory={valHistory} />
      </div>
    </>
  );
}

export default Clicker;
