/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/dog.glb
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function DogModel(props) {

  const { nodes, materials } = useGLTF('/dog.glb')

  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.main.geometry} material={materials.palette} position={[3.69, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[-3.4, 0, -2.95]} scale={[7.05, 1, 7.05]} />
    </group>
  )
}

useGLTF.preload('/dog.glb')