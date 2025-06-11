
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function FloatingCube() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.7
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#667eea" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#4338ca"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}
