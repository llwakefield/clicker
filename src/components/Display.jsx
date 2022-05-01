import React from 'react';

const Display = ({ numsArr }) => {
	const even = { color: 'red' };
	const odd = { color: 'blue'};

	return (
		numsArr.map((el, idx) => {
			if(el % 2 === 0) {
				return (<div key={idx} style={even}>{el}</div>)
			} else {
				return (<div key={idx} style={odd}>{el}</div>)
			};
		})
	)
}

export default Display;
