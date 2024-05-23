import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/img.webp'
import img1 from '../assets/img3.avif'
import img2 from '../assets/p1.avif'

function Carousel1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>01</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>02</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>03</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;