'use client'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  console.log(value);
  

  return (
    <div>
      <Calendar onChange={()=>console.log('Funciona')} value={value} />
    </div>
  );
}

export default CalendarComponent;