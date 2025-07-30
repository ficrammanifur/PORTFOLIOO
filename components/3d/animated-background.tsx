"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export default function AnimatedBackground() {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate random points
  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05

      // Animate individual particles
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#667eea"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}
