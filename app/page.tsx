import { Time } from './components'
import './css/home.css'
import './css/history.css'
import Image from 'next/image'

import pieDummy from './assets/img/pieDummy.png'
import linesDummy from './assets/img/linesDummy.png'
import calendarDummy from './assets/img/calendarDummy.png'

export default function Home() {
  
  return (
    <div className='page-container'>
      <div className="title-container">
        <h1>WELCOME BACK [USER]</h1>
        <h1><Time/></h1>
      </div>
      <div className='calendar-container'>
        <Image src={calendarDummy} className='graph' alt='Imagen de prueba de pie'/>
      </div>
      <div className='graph-container'>
        <Image src={pieDummy} className='graph' alt='Imagen de prueba de pie'/>
        <Image src={linesDummy} className='graph' alt='Imagen de prueba de lines'/>
      </div>
      <div className='history'>
        <table className='table-history'>
          <tbody>
            <tr>
              <td>Cine</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Cine</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Cine</td>
              <td>$50.000</td>
            </tr>
            <tr>
              <td>Cine</td>
              <td>$50.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
