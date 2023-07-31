'use client'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

import './css/calendar.css'
import TransactionHistory from './TransactionHistory';

function CalendarComponent() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue:Date) {
    setValue(nextValue);
  }

  return (
    <>
      <div className='calendar-container'>
        <Calendar locale='es' onClickDay={onChange} value={value}/>
      </div>
      <div className='history'>
        {/* TODO
          Transaction history must be dynamic. Once a date is selected, onChange will call the transactions
          from the chosen day to be shown below. Component will be created.
         */}
         <TransactionHistory value={value}/>
      </div>
    </>
  );
}

export default CalendarComponent;