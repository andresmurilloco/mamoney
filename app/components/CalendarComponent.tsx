'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={()=>console.log('Funciona')} value={value} />
    </div>
  );
}

export default CalendarComponent;