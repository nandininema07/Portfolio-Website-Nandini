
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { FloatingCube } from './FloatingCube'

export function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#667eea" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <FloatingCube />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
