
// const Person = (props) => {
const Person = ({name, age}) => {

  // console.log(props)

  // const person = {
  //   name: 'Nisse',
  //   age: 54
  // }

  // const {name, age} = person

  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <p>age: {age}</p>
    </div>
  )
}

export default Person