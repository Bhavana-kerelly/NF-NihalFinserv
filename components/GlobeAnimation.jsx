"use client"; // This directive is crucial for Next.js App Router

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const GlobeParticles = (props) => {
  const ref = useRef();
  const { viewport } = useThree();

  // --- CHANGES FOR BIGGER & MORE ATTRACTIVE ---
  // Increased particle count for a denser, more substantial globe
  // Increased radius for a physically larger globe
  const sphere = random.inSphere(new Float32Array(15000 * 3), { radius: 2.2 }); // Increased from 5000 particles, radius from 1.5 to 2.2

  useFrame((state, delta) => {
    // Subtle, continuous rotation
    if (ref.current) {
      ref.current.rotation.x += delta / 25; // Slightly slower rotation
      ref.current.rotation.y += delta / 30; // Slightly slower rotation
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          // --- CHANGES FOR MORE ATTRACTIVE ---
          // Changed color to a vibrant purple/blue for a more captivating look
          color="#a020f0" // A vibrant purple
          size={0.012} // Slightly adjusted particle size, experiment with this
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // THREE.AdditiveBlending for a glow effect
        />
      </Points>
    </group>
  );
};

const GlobeAnimation = () => {
  return (
    <Canvas
      // --- CHANGES FOR BIGGER & MORE ATTRACTIVE ---
      // Adjusted camera position to compensate for the larger globe,
      // pulling it back slightly so the whole globe is visible.
      // fov: 75 is generally good, but you can adjust.
      camera={{ position: [0, 0, 4.5], fov: 70 }} // Camera pulled back (from 3.5 to 4.5), slightly narrower FOV
      style={{ width: '100%', height: '100%' }}
    >
      {/* --- CHANGES FOR MORE ATTRACTIVE --- */}
      {/* Enhanced lighting for better depth and glow */}
      <ambientLight intensity={0.6} /> {/* Slightly brighter ambient light */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" /> {/* Main light, brighter */}
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#add8e6" /> {/* Secondary cool light */}
      <pointLight position={[0, 5, -5]} intensity={0.7} color="#ffb6c1" /> {/* Warm highlight from top */}

      <GlobeParticles />
    </Canvas>
  );
};

export default GlobeAnimation;