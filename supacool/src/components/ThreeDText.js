import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { Text } from '@react-three/drei';


const ThreeDText = ({ text }) => {
  const mesh = useRef();
  const font = useLoader(FontLoader, process.env.PUBLIC_URL + '/Press Start 2P_Regular.json');


  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <Text
        font={font}
        fontSize={1}
        color="#ffffff"
        anchorX="center" // Ankkurointi keskelle X-suunnassa
        anchorY="middle" // Ankkurointi keskelle Y-suunnassa
      >
        {text}
      </Text>
    </mesh>
  );
};

const Scene = ({ text }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ThreeDText text={text} />
    </Canvas>
  );
};

export default Scene;
