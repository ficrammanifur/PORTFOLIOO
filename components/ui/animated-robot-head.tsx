"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import * as THREE from "three"

interface RobotHeadProps {
  position?: [number, number, number]
}

export default function AnimatedRobotHead({ position = [0, 0, 0] }: RobotHeadProps) {
  const groupRef = useRef<THREE.Group>(null)
  const leftEyeRef = useRef<THREE.Mesh>(null)
  const rightEyeRef = useRef<THREE.Mesh>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [blinkState, setBlinkState] = useState({ isBlinking: false, nextBlink: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()

      // Head rotation following mouse
      groupRef.current.rotation.y += (mousePosition.x * 0.3 - groupRef.current.rotation.y) * 0.05
      groupRef.current.rotation.x += (-mousePosition.y * 0.2 - groupRef.current.rotation.x) * 0.05

      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(time) * 0.1

      // Blinking logic
      if (time > blinkState.nextBlink) {
        setBlinkState({
          isBlinking: true,
          nextBlink: time + 2 + Math.random() * 3,
        })

        setTimeout(() => {
          setBlinkState((prev) => ({ ...prev, isBlinking: false }))
        }, 150)
      }

      // Eye movement
      const eyeOffsetX = Math.sin(time * 0.3) * 0.1
      const eyeOffsetY = Math.cos(time * 0.4) * 0.05

      if (leftEyeRef.current && rightEyeRef.current) {
        const eyeScale = blinkState.isBlinking ? 0.1 : 1
        leftEyeRef.current.scale.y = eyeScale
        rightEyeRef.current.scale.y = eyeScale

        leftEyeRef.current.position.x = -0.4 + eyeOffsetX
        leftEyeRef.current.position.y = 0.3 + eyeOffsetY
        rightEyeRef.current.position.x = 0.4 + eyeOffsetX
        rightEyeRef.current.position.y = 0.3 + eyeOffsetY
      }
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="#667eea" shininess={100} />
      </mesh>

      {/* Left Eye */}
      <mesh ref={leftEyeRef} position={[-0.4, 0.3, 1.1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhongMaterial color="#00ffff" emissive="#004444" />
      </mesh>

      {/* Right Eye */}
      <mesh ref={rightEyeRef} position={[0.4, 0.3, 1.1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhongMaterial color="#00ffff" emissive="#004444" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, -0.3, 1.1]}>
        <boxGeometry args={[0.8, 0.1, 0.1]} />
        <meshPhongMaterial color="#333333" />
      </mesh>

      {/* Antennas */}
      <mesh position={[-0.5, 1.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshPhongMaterial color="#764ba2" />
      </mesh>
      <mesh position={[0.5, 1.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshPhongMaterial color="#764ba2" />
      </mesh>

      {/* Antenna tips */}
      <mesh position={[-0.5, 1.5, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshPhongMaterial color="#ff6b6b" emissive="#441111" />
      </mesh>
      <mesh position={[0.5, 1.5, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshPhongMaterial color="#ff6b6b" emissive="#441111" />
      </mesh>
    </group>
  )
}
