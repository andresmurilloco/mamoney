import { Time } from './components'
import './css/home.css'
import Image from 'next/image'

import pieDummy from './assets/img/pieDummy.png'
import linesDummy from './assets/img/linesDummy.png'

export default function Home() {
  
  return (
    <div className='page-container'>
      <div className="title-container">
        <h1>WELCOME BACK [USER]</h1>
        <h1><Time/></h1>
      </div>
      <div className='graph-container'>
        <Image src={pieDummy} className='graph' alt='Imagen de prueba de pie'/>
        <Image src={linesDummy} className='graph' alt='Imagen de prueba de lines'/>
      </div>
      <div className='history'>
        <table>
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
          <tr>
            <td>Cine</td>
            <td>$50.000</td>
          </tr>
          <tr>
            <td>Cine</td>
            <td>$50.000</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
