import React from 'react';

const CurrentDate = () => {
  var currentDate = new Date();

  return (
    <div>
      <h1>The current date is: {currentDate.getDate()}</h1>
    </div>
  );
};

export default CurrentDate;
