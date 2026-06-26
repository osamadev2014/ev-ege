"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const GRID = 48
const SPACING = 0.35
const COUNT = GRID * GRID

function Terrain() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const color = useMemo(() => new THREE.Color(), [])

  const positions = useMemo(() => {
    const arr: { x: number; z: number; d: number }[] = []
    const half = (GRID - 1) / 2
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const x = (i - half) * SPACING
        const z = (j - half) * SPACING
        const d = Math.sqrt(x * x + z * z)
        arr.push({ x, z, d })
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return
    const t = clock.getElapsedTime() * 0.3

    for (let k = 0; k < COUNT; k++) {
      const p = positions[k]
      const h =
        Math.sin(p.x * 0.7 + t * 0.4) * 0.6 +
        Math.cos(p.z * 0.6 - t * 0.3) * 0.6 +
        Math.sin((p.x + p.z) * 0.4 + t * 0.5) * 0.3 +
        Math.cos(p.d * 1.0 - t * 0.5) * 0.4
      const height = Math.max(0.06, 0.8 + h)

      dummy.position.set(p.x, height / 2, p.z)
      dummy.scale.set(SPACING * 0.75, height, SPACING * 0.75)
      dummy.updateMatrix()
      mesh.setMatrixAt(k, dummy.matrix)

      const intensity = THREE.MathUtils.clamp(height / 2.4, 0.15, 0.6)
      const v = 0.08 + intensity * 0.25
      color.setRGB(v, v, v)
      mesh.setColorAt(k, color)
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.7} metalness={0.3} />
    </instancedMesh>
  )
}

export function Terrain3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 6, 12], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#111827"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 10, 6]} intensity={1.0} color="#ffffff" />
      <directionalLight position={[-4, 4, -4]} intensity={0.4} color="#ffffff" />
      <group rotation={[0, Math.PI / 6, 0]}>
        <Terrain />
      </group>
    </Canvas>
  )
}
