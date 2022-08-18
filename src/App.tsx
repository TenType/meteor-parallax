import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import meteor from './assets/meteor.png';
import stars from './assets/stars.png';
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png';
import grass from './assets/grass.png';

import SkyObject from './components/SkyObject';

import './App.css';

export default function App() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer
        sticky={{ start: 0.5, end: 3.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '50%',
        }}
      >
        <img src={meteor} alt="meteor"></img>
      </ParallaxLayer>

      <ParallaxLayer id="stars-bg" factor={5} />

      <ParallaxLayer
        speed={0}
        factor={2}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundRepeat: 'repeat',
        }}
      />
      <SkyObject left="50%" offset={3} size="20%" image={cloud1} />
      <SkyObject left="10%" offset={3.5} size="20%" image={cloud2} />
      <SkyObject left="70%" offset={3.6} size="20%" image={cloud2} />

      <ParallaxLayer
        offset={3}
        factor={2}
        style={{
          backgroundImage: `url(${grass})`,
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={4}
        speed={4}
        style={{
          backgroundColor: 'red',
        }}
      />
    </Parallax>
  );
}
