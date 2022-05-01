/* eslint-disable react/no-array-index-key */
import React from 'react';

const Display = ({ valHistory }) => {
  const even = { color: 'red' };
  const odd = { color: 'blue' };

  return (
    valHistory.map((el, idx) => {
      if (el % 2 === 0) {
        return (<div key={idx} style={even}>{el}</div>);
      }
      return (<div key={idx} style={odd}>{el}</div>);
    })
  );
};

export default Display;
