import React from 'react';
import './Achievement.css';

const Achievement = ({ description, title, value }) => {
  return (
    <div className="wrapper">
      {`Achievement Unlocked: ${title}`}
      <br/>
      {`${value}G - ${description}`}
    </div>
  );
};

export default Achievement;
