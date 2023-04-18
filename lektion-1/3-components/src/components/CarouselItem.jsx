import React from 'react'

const CarouselItem = (props) => {
  console.log(props)
  return (
    <div className={"carousel-item " + props.className}>
      <img src={props.image} className="d-block w-100" alt="..."/>
    </div>
  )
}

export default CarouselItem