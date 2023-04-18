import React from 'react'

const CarouselItem = (props) => {
// const CarouselItem = ({image, className}) => {
  console.log(props)

  // const props = {
  //   image: '/assets/img1.jpg',
  //   className: 'active'
  // }

  const {image, className} = props

  return (
    <div className={"carousel-item " + className}>
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
  )
}

export default CarouselItem