'use client';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="/almeria.jpg" alt="Almería" width="500" height="300"/>
        <Carousel.Caption>
          <Link href="/andalucia/almeria"><h3>Almería</h3></Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/malaga.jpg" alt="Málaga" width="500" height="300"/>
        <Carousel.Caption>
          <Link href="/andalucia/malaga"><h3>Málaga</h3></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/granada.jpg" alt="Granada" width="500" height="300"/>
        <Carousel.Caption>
          <Link href="/anadalucia/granada"><h3>Granada</h3></Link>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;