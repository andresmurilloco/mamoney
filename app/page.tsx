import { Time } from './components'
import './css/home.css'
import './css/history.css'
import CalendarComponent from './components/CalendarComponent'

export default function Home() {
  
  return (
    <div className='page-container'>
      <div className="title-container">
        <h1><Time/></h1>
      </div>
      <div className='calendar-container'>
        <CalendarComponent/>
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
    </div>
  )
}
