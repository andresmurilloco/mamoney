import React from 'react'

interface Props {
  value: Date
}

const TransactionHistory = (value: Props) => {
  const date = value.value;
  const dateToCheck = date.getUTCDate() + date.getUTCMonth() + date.getUTCFullYear();

  console.log(dateToCheck);

  return (
    <>
      <h1>{date.getDate()}</h1>
      <table className='table-history'>
        <tbody>
          <tr>
            <td>Citas prueba de deploy</td>
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
    </>
  )
}

export default TransactionHistory