"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere position={[-8, 2, -5]} args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#667eea" transparent opacity={0.3} wireframe />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Box position={[8, -2, -8]} args={[1, 1, 1]}>
          <meshStandardMaterial color="#764ba2" transparent opacity={0.2} wireframe />
        </Box>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <Torus position={[0, 5, -10]} args={[1, 0.3, 16, 100]}>
          <meshStandardMaterial color="#f093fb" transparent opacity={0.4} wireframe />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere position={[6, 4, -6]} args={[0.3, 16, 16]}>
          <meshStandardMaterial color="#4facfe" transparent opacity={0.5} />
        </Sphere>
      </Float>
    </group>
  )
}
