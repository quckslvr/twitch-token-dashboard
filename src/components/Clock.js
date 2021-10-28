import React, { useState } from 'react';

const Clock = () => {
  const [date, newDate] = useState(new Date())
  setInterval(() => {
    newDate(new Date())
  },1000)
  return <div><h2>{date.toLocaleTimeString()}</h2></div>
}

export default Clock;