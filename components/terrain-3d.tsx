"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const GRID = 64
const SPACING = 0.32
const COUNT = GRID * GRID

function Terrain() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const color = useMemo(() => new THREE.Color(), [])

  // Precompute per-instance grid coordinates and a radial falloff.
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
    const t = clock.getElapsedTime()

    for (let k = 0; k < COUNT; k++) {
      const p = positions[k]
      // Layered sine waves create rolling mountain ridges.
      const h =
        Math.sin(p.x * 0.9 + t * 0.6) * 1.1 +
        Math.cos(p.z * 0.8 - t * 0.4) * 1.1 +
        Math.sin((p.x + p.z) * 0.5 + t) * 0.6 +
        Math.cos(p.d * 1.2 - t * 0.8) * 0.8
      const height = Math.max(0.08, 1.6 + h)

      dummy.position.set(p.x, height / 2, p.z)
      dummy.scale.set(SPACING * 0.78, height, SPACING * 0.78)
      dummy.updateMatrix()
      mesh.setMatrixAt(k, dummy.matrix)

      const intensity = THREE.MathUtils.clamp(height / 4.2, 0.12, 1)
      color.setRGB(0.05 + intensity * 0.2, 0.12 + intensity * 0.4, 0.35 + intensity * 0.6)
      mesh.setColorAt(k, color)
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.55} metalness={0.15} />
    </instancedMesh>
  )
}

export function Terrain3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 7.5, 13], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#111827"]} />
      <fog attach="fog" args={["#111827", 14, 30]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 12, 8]} intensity={1.4} color="#2563EB" />
      <directionalLight position={[-8, 6, -6]} intensity={0.6} color="#1e40af" />
      <group rotation={[0, Math.PI / 6, 0]}>
        <Terrain />
      </group>
    </Canvas>
  )
}
