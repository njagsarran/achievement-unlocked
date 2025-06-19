import React from 'react';
import './Achievement.css';

const Achievement = ({ name, value }) => {
  return (
    <div className="wrapper">
      Achievement Unlocked
      <br/>
      {`${value}G - ${name}`}
    </div>
  );
};

export default Achievement;
