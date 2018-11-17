import React from 'react';

const Bill = ({
  name,
  description,
  cost,
  date,
  type
}) => (
  <li className="bill-item">
    {name}
    {cost}
  </li>
);

export default Bill;
