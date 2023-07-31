'use client'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

import './css/calendar.css'

function CalendarComponent() {
  const [value, onChange] = useState(new Date()); 

  return (
    <>
      <div className='calendar-container'>
        <Calendar locale='es' onChange={()=>console.log('Funciona')} value={value} />
      </div>
      <div className='history'>
        <table className='table-history'>
          <tbody>
            <tr>
              <td>Citas</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Alimentación</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Entretenimiento</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Combustible</td>
              <td>$50.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CalendarComponent;