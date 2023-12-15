import React from 'react';
import { DivIcon, Image, Text } from './styles';

interface IIcon {
  src: string;
  alt: string;
  textInfo: string;
}

function Icon({ src, alt, textInfo }: IIcon) {
  return (
    <DivIcon>
      <Image>
        <img src={src} alt={alt} />
      </Image>

      <Text>{textInfo}</Text>
    </DivIcon>
  );
}

export default Icon;
