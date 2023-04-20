import { useState } from 'react'
import Header from './components/Header'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'

const App = () => {

  const [customers, setCustomers] = useState([
    { id: '12wedfsc132qcws', name: 'Joakim' }
  ])

  const addCustomer = (customerName) => {
    setCustomers(prevCustomers => {
      return [...prevCustomers, { id: Date.now().toString(), name: customerName }]
    })
  }

  const removeCustomer = (id) => {
    setCustomers(prevCustomers => {
      return prevCustomers.filter(customer => customer.id !== id)
    })
  }

  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} removeCustomer={removeCustomer} />
      </div>
    </div>
  )
}

export default App