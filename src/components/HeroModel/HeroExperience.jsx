import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); // Replace with actual logic to determine if the device is a tablet
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Replace with actual logic to determine if the device is a mobile

  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45 }} >   {/* field of view */}
        
        <OrbitControls 
            enablePan={false} // prevent panning the scene
            enableZoom={!isTablet} // prevent zooming in/out
            maxDistance={20} 
            minDistance={5}
            minPolarAngle={Math.PI / 5} // prevent looking too high
            maxPolarAngle={Math.PI / 2} // prevent looking too low
        />

        <HeroLights />

        <group
            scale={isMobile ? 0.7 : 1} // scale down for mobile devices
            position={[0, -3, 0]} // adjust position for better view on mobile
            rotation={[0, -Math.PI / 4, 0]} // rotate the room for better view
        >
          <Room />
        </group>

    </Canvas>
  )
}

export default HeroExperience
