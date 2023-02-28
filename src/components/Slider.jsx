import Carousel from 'react-bootstrap/Carousel';
import Suculent1 from'../assets/1.jpg'
import Suculent2 from'../assets/2.jpg'
import Suculent3 from'../assets/3.jpg'
import Suculent4 from'../assets/4.jpg'
<assets />
function Slider() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className="d-block vh-100 m-auto"
          src={Suculent1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto vh-100"
          src={Suculent2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto vh-100"
          src={Suculent3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;