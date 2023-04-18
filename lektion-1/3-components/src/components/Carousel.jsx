import imgTwo from '../assets/bild2.jpg'
import imgThree from '../assets/bild3.jpg'
import CarouselItem from './CarouselItem'

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <CarouselItem image="/assets/bild1.jpg" className="active" />
    <CarouselItem image={imgTwo} />
    <CarouselItem image={imgTwo} />
    <CarouselItem image={imgTwo} />
    <CarouselItem image={imgThree} />
    <CarouselItem image={imgThree} />
    <CarouselItem image={imgThree} />
    <CarouselItem image={imgThree} />
    <CarouselItem image={imgThree} />
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel