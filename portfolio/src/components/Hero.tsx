import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import profilePhoto from '../assets/profile.jpg';

function Scene() {
  const sphereRef = useRef<any>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 5, 2]} intensity={1.5} color="#00E5FF" />
      <directionalLight position={[-2, -5, -2]} intensity={1.5} color="#8B5CF6" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1.5, 32, 32]} scale={1.2}>
          <MeshDistortMaterial
            color="#00E5FF"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] pt-24 pb-16">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
        <motion.div 
          style={{ y: y1, opacity }}
          className="flex flex-col justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono tracking-widest uppercase mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span>Digital Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="text-6xl md:text-7xl lg:text-[7.5rem] font-display font-black leading-[0.92] tracking-tighter text-white"
          >
            <motion.span className="block text-white hover:text-cyan transition-colors duration-500 cursor-default">TURNING</motion.span>
            <motion.span className="block text-white hover:text-violet transition-colors duration-500 cursor-default">IDEAS</motion.span>
            <motion.span className="block text-white hover:text-magenta transition-colors duration-500 cursor-default">INTO</motion.span>
            <motion.span className="block text-gradient">IMPACT.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-lg text-white/70 max-w-lg font-sans"
          >
            A finance, operations, and analytics professional bridging complex systems and real-world execution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 flex items-center space-x-6 text-sm font-mono tracking-widest text-white/60"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-12 h-[1px] bg-white/30 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-cyan"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="relative h-[400px] md:h-auto flex items-center justify-center pointer-events-none">
          {/* Profile layers over the 3D canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative w-72 h-72 md:w-96 md:h-96 pointer-events-auto flex items-center justify-center"
          >
            {/* Glow / Light */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan/30 to-transparent rounded-full blur-3xl animate-pulse" />
            
            {/* 3D Frame */}
            <div className="absolute inset-4 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-cyan/30 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Transparent Depth Layer / Photo */}
            <div className="relative z-10 w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_40px_rgba(0,229,255,0.4)] bg-[#0B0F19]">
              <img 
                src={profilePhoto} 
                alt="Krupa Raju" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Orbital tags */}
            {['FINANCE', 'OPERATIONS', 'ANALYTICS'].map((tag, i) => (
              <div 
                key={tag}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-165px) rotate(-${i * 120}deg)` 
                }}
              >
                <div className="glass-panel px-3 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-white bg-[#0B0F19]/90 border border-white/20 shadow-lg whitespace-nowrap">
                  {tag}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
