import { useState } from 'react'
import CustomerRow from './CustomerRow'

const CustomerList = ({ customers, removeCustomer }) => {

  
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>

        {
          customers.length > 0 && customers.map(customer => (
            <CustomerRow key={customer.id} customer={customer} removeCustomer={removeCustomer} />
          ))
        }


        {
          customers.length == 0 && (
            <tr>
              <td colSpan={3}>No customers to show</td>
            </tr>
          )
        }
        
      </tbody>
    </table>
  )
}

export default CustomerList