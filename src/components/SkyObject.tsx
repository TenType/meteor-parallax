import { ParallaxLayer } from '@react-spring/parallax';

interface Props {
  offset: number;
  left: string;
  size: string;
  image: string;
}

export default function SkyObject({ offset, left, size, image }: Props) {
  return (
    <ParallaxLayer
      offset={offset}
      style={{
        marginLeft: left,
        backgroundSize: size,
        backgroundImage: `url(${image})`,
      }}
    />
  );
}
