import React from 'react';
import { ArrowLeft, Container, Image } from './styles';
import Ticker from 'framer-motion-ticker';

interface ICarousel {
  images: string[];
}

function Carousel({ images }: ICarousel) {
  return (
    <Container>
      <ArrowLeft />
      <Image>
        <Ticker duration={30}>
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel"
              style={{
                margin: '12px',
                width: '354px',
              }}
            >
              <img src={image} alt="Imagem da Colônia de Marte" />
            </div>
          ))}
        </Ticker>
      </Image>
    </Container>
  );
}

export default Carousel;
