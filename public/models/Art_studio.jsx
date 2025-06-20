/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 art_studio.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/art_studio.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.walls} />
      <group position={[1.339, 1.639, -3.531]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1.029, 1]}>
        <mesh geometry={nodes.Plane012.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane012_1.geometry} material={materials.glow} />
      </group>
      <group position={[-1.355, 1.639, -3.531]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1.029, 1]}>
        <mesh geometry={nodes.Plane012_2.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane012_3.geometry} material={materials.glow} />
      </group>
      <mesh geometry={nodes.sm_radiator3001.geometry} material={materials.walls} position={[1.301, -0.053, -3.373]} scale={[0.899, 0.875, 0.858]} />
      <mesh geometry={nodes.sm_radiator3002.geometry} material={materials.walls} position={[-1.381, -0.053, -3.373]} scale={[0.899, 0.875, 0.858]} />
      <mesh geometry={nodes.sm_radiator3003.geometry} material={materials.walls} position={[2.984, -0.053, 1.289]} rotation={[0, -Math.PI / 2, 0]} scale={[0.899, 0.875, 0.858]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials.walls} position={[-1.295, -0.002, 4.601]} />
      <mesh geometry={nodes.Cube063.geometry} material={materials.walls} position={[0.177, 0.002, -0.304]} rotation={[Math.PI, -1.551, Math.PI]} scale={[1.223, 0.78, 1.515]} />
      <group position={[3.172, 1.665, 1.304]} scale={[1, 1.054, 1]}>
        <mesh geometry={nodes.Plane012_4.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane012_5.geometry} material={materials.glow} />
      </group>
      <group position={[0, -0.022, 0]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials.glow} />
      </group>
      <mesh geometry={nodes.Plane026.geometry} material={materials.walls} position={[-1.295, -0.002, 4.535]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials.walls} position={[-1.295, -0.002, 4.535]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.furniture} position={[2.15, -0.03, 1.522]} rotation={[-2.844, -0.756, -2.934]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.furniture} position={[2.191, -0.03, -2.531]} rotation={[-0.268, -0.635, -0.162]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.furniture} position={[-0.877, 0.002, -2.946]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.furniture} position={[-2.36, 0, -2.4]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1.08]} />
      <mesh geometry={nodes.sm_stand001.geometry} material={materials.furniture} position={[-2.599, 0.01, -0.663]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.873, 1]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials.furniture} position={[-2.865, 0.04, 0.476]} scale={1.139} />
      <mesh geometry={nodes.Cube033.geometry} material={materials.furniture} position={[2.29, -0.006, 3.698]} rotation={[0, 0.439, 0]} scale={[1, 1, 1.464]} />
      <mesh geometry={nodes.sm_sofa.geometry} material={materials.furniture} position={[0.611, 0.042, 3.855]} rotation={[0, -1.571, 0]} scale={0.931} />
      <mesh geometry={nodes.Cube037.geometry} material={materials.furniture} position={[2.403, 0.033, -0.277]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials.furniture} position={[2.403, 0.797, -0.277]} rotation={[-Math.PI / 2, 1.333, Math.PI / 2]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials.furniture} position={[1.787, 0, -0.255]} />
      <mesh geometry={nodes.sm_cabinet.geometry} material={materials.furniture} position={[-2.598, -0.004, 2.361]} rotation={[0, -Math.PI / 2, 0]} scale={[1.224, 1.463, 1.224]} />
      <mesh geometry={nodes.sm_cardboard_box012.geometry} material={materials.furniture} position={[-2.222, -0.022, 3.95]} rotation={[0, 0.916, 0]} scale={0.931} />
      <mesh geometry={nodes.sm_cardboard_box001.geometry} material={materials.furniture} position={[-2.62, -0.031, -1.189]} rotation={[0, -1.348, 0]} scale={0.604} />
      <mesh geometry={nodes.sm_cardboard_box002.geometry} material={materials.furniture} position={[-2.589, 0.305, -1.199]} rotation={[0, -0.441, 0]} scale={0.516} />
      <mesh geometry={nodes.sm_cardboard_box003.geometry} material={materials.furniture} position={[-2.6, -0.022, 3.453]} rotation={[0, -1.136, 0]} scale={0.931} />
      <mesh geometry={nodes.sm_cardboard_box004.geometry} material={materials.furniture} position={[-2.468, 0.476, 3.803]} rotation={[-Math.PI, 0.341, -Math.PI]} scale={0.873} />
      <mesh geometry={nodes.sm_cardboard_box005.geometry} material={materials.furniture} position={[0.31, -0.015, -2.931]} rotation={[0, 1.409, 0]} scale={0.645} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.furniture} position={[-2.646, 0, 1.501]} rotation={[0, -0.208, 0]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.furniture} position={[-1.426, 0, -2.024]} rotation={[0, -1.058, 0]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials.furniture} position={[1.918, 0, -2.136]} rotation={[0, -0.661, 0]} />
      <mesh geometry={nodes.Plane016.geometry} material={materials.drawing} position={[-2.894, 1.657, -2.442]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.drawing} position={[2.319, 1.053, -2.699]} rotation={[-0.298, -0.628, -0.178]} scale={[1, 1.042, 0.945]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.drawing} position={[-2.56, 0.765, -2.566]} rotation={[0, 0.769, 0]} scale={0.39} />
      <mesh geometry={nodes.Cube010.geometry} material={materials.drawing} position={[1.119, 0.552, -3.143]} rotation={[-0.215, 0, 0]} scale={[0.861, 0.932, 0.932]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials.drawing} position={[0.909, 0.6, -3.297]} rotation={[-0.215, 0, 0]} scale={[0.924, 1, 1]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.drawing} position={[-2.41, 1.125, -3.257]} rotation={[-0.215, 0, 0]} scale={[0.55, 0.596, 0.596]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials.drawing} position={[1.862, 0.004, -2.71]} rotation={[Math.PI, -0.346, Math.PI]} scale={1.307} />
      <mesh geometry={nodes.Cube015.geometry} material={materials.drawing} position={[2.48, 0.018, -2.64]} rotation={[-Math.PI, 0.187, -Math.PI]} scale={1.307} />
      <mesh geometry={nodes.Cube016.geometry} material={materials.drawing} position={[2.143, 0.01, -2.324]} rotation={[-Math.PI, 0.463, -Math.PI]} scale={1.307} />
      <mesh geometry={nodes.Cube018.geometry} material={materials.drawing} position={[1.825, 0.01, -3.123]} rotation={[0, 0.119, 0]} scale={1.307} />
      <mesh geometry={nodes.Cube017.geometry} material={materials.drawing} position={[2.503, 0.013, -3.083]} rotation={[-Math.PI, 0.201, -Math.PI]} scale={1.307} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.drawing} position={[2.653, 0.013, -2.155]} rotation={[0, 1.543, 0]} scale={1.307} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.drawing} position={[-2.202, 0.763, -2.559]} rotation={[0, 0.374, 0]} scale={1.245} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.drawing} position={[-2.182, 0.766, -1.965]} rotation={[-Math.PI, 1.378, -Math.PI]} scale={1.245} />
      <mesh geometry={nodes.Plane006.geometry} material={materials.drawing} position={[-2.448, 0.771, -2.093]} scale={1.245} />
      <mesh geometry={nodes.Plane007.geometry} material={materials.drawing} position={[-2.357, 0.765, -1.717]} rotation={[0, 0.564, 0]} scale={1.245} />
      <mesh geometry={nodes.Plane010.geometry} material={materials.drawing} position={[2.915, 2.273, -1.195]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.28} />
      <mesh geometry={nodes.Cube034.geometry} material={materials.drawing} position={[0.565, 1.728, 4.309]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1.16, 1.182, 1.182]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.drawing} position={[-0.353, 1.258, -3.434]} rotation={[Math.PI / 2, 0, 0]} scale={1.369} />
      <mesh geometry={nodes.Cube036.geometry} material={materials.drawing} position={[-2.632, 0.875, 0.329]} rotation={[0, 1.561, 0]} scale={[1.133, 0.768, 1.133]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials.drawing} position={[2.355, 0.861, -0.386]} rotation={[-2.063, 1.302, 2.048]} scale={0.873} />
      <mesh geometry={nodes.Cube041.geometry} material={materials.drawing} position={[2.293, 0.842, -0.235]} rotation={[-Math.PI / 2, 1.333, Math.PI / 2]} scale={0.873} />
      <mesh geometry={nodes.Plane020.geometry} material={materials.drawing} position={[2.951, 1.841, -0.312]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={2.254} />
      <mesh geometry={nodes.Plane021.geometry} material={materials.drawing} position={[2.915, 1.524, -1.565]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.28} />
      <mesh geometry={nodes.Plane022.geometry} material={materials.drawing} position={[2.927, 1.827, -2.639]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.84} />
      <mesh geometry={nodes.Plane023.geometry} material={materials.drawing} position={[-2.902, 1.716, 2.355]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[3.122, 1.165, 3.122]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.drawing} position={[2.783, 0.857, 3.066]} rotation={[-Math.PI / 2, -1.462, -Math.PI / 2]} scale={[1.28, 1.386, 1.386]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.drawing} position={[2.671, 0.79, 3.106]} rotation={[-Math.PI / 2, -1.462, -Math.PI / 2]} scale={[1.158, 1.254, 1.254]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.details} position={[-1.723, 0.77, -3.151]} rotation={[Math.PI, -0.675, Math.PI]} scale={1.225} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.details} position={[-1.645, 0.953, -3.213]} scale={1.225} />
      <mesh geometry={nodes.sm_plant.geometry} material={materials.details} position={[-2.376, 0.949, 3.723]} rotation={[-Math.PI, 1.083, -Math.PI]} scale={0.933} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials.details} position={[-0.964, 0.757, -3.157]} rotation={[-0.218, -0.171, 0.045]} scale={0.962} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials.details} position={[-0.974, 0.752, -3.154]} rotation={[0.027, 0.029, 0.04]} scale={0.962} />
      <mesh geometry={nodes.Cylinder044.geometry} material={materials.details} position={[-0.936, 0.894, -3.134]} rotation={[0.051, -0.927, 2.935]} scale={0.962} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.details} position={[-0.954, 0.791, -2.787]} rotation={[Math.PI / 2, 0, 0]} scale={0.918} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.details} position={[-0.958, 0.76, -3.156]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials.details} position={[-1.012, 0.784, -2.771]} scale={-1.321} />
      <mesh geometry={nodes.sm_bucket004.geometry} material={materials.details} position={[-0.693, -0.014, -2.97]} scale={0.659} />
      <mesh geometry={nodes.Cube023.geometry} material={materials.details} position={[-1.437, 0.761, -2.762]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.details} position={[-1.513, 0.761, -2.762]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials.details} position={[-1.582, 0.761, -2.762]} />
      <mesh geometry={nodes.sm_bust001.geometry} material={materials.details} position={[-2.616, 0.74, -0.65]} rotation={[0, Math.PI / 2, 0]} scale={0.801} />
      <mesh geometry={nodes.Cylinder015.geometry} material={materials.details} position={[-1.581, 0.77, -3.211]} rotation={[-Math.PI, 1.273, -Math.PI]} scale={1.225} />
      <mesh geometry={nodes.Cube030.geometry} material={materials.details} position={[-1.244, 0.906, -2.776]} rotation={[-1.601, 0.086, -2.979]} />
      <mesh geometry={nodes.Cube031.geometry} material={materials.details} position={[-1.646, 0.769, -2.849]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.details} position={[-0.162, 0.759, -2.69]} scale={1.094} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials.details} position={[-1.756, 0.767, -2.896]} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials.details} position={[-2.652, 0.877, 0.415]} rotation={[Math.PI, -0.675, Math.PI]} scale={1.225} />
      <mesh geometry={nodes.Cylinder020.geometry} material={materials.details} position={[-2.57, 0.876, 0.2]} scale={1.225} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials.details} position={[-2.641, 1.297, 0.9]} rotation={[-Math.PI, 1.273, -Math.PI]} scale={1.225} />
      <mesh geometry={nodes.Cylinder022.geometry} material={materials.details} position={[-0.979, 0.791, -2.787]} rotation={[Math.PI / 2, 0, 0]} scale={0.918} />
      <mesh geometry={nodes.sm_shelf_books2.geometry} material={materials.details} position={[-2.614, 1.711, 0.714]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1.146, 1]} />
      <mesh geometry={nodes.sm_shelf_books002.geometry} material={materials.details} position={[-2.621, 1.303, 0.253]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1.112, 1]} />
      <mesh geometry={nodes.Cylinder023.geometry} material={materials.details} position={[-0.302, 0.774, -3.226]} rotation={[-1.496, 0.027, -2.8]} />
      <mesh geometry={nodes.Cylinder025.geometry} material={materials.details} position={[-1.006, 0.791, -2.787]} rotation={[Math.PI / 2, 0, 0]} scale={0.918} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials.details} position={[2.699, 0.487, -1.26]} rotation={[2.373, 1.203, -2.339]} scale={1.066} />
      <mesh geometry={nodes.Cylinder027.geometry} material={materials.details} position={[-0.52, 0.876, -3.378]} />
      <mesh geometry={nodes.Cylinder028.geometry} material={materials.details} position={[-0.416, 0.876, -3.358]} rotation={[0, 0.465, 0]} />
      <mesh geometry={nodes.Cylinder029.geometry} material={materials.details} position={[-0.652, 0.774, -3.244]} rotation={[-1.628, -0.055, 0.771]} />
      <mesh geometry={nodes.Cylinder030.geometry} material={materials.details} position={[-0.24, 0.874, -3.393]} rotation={[0, -0.801, 0]} />
      <mesh geometry={nodes.Cylinder031.geometry} material={materials.details} position={[-0.156, 0.774, -3.293]} rotation={[-1.65, 0, 0]} />
      <mesh geometry={nodes.Cylinder032.geometry} material={materials.details} position={[-0.506, 0.774, -3.285]} rotation={[-1.587, -0.078, 1.362]} />
      <mesh geometry={nodes.Cylinder033.geometry} material={materials.details} position={[-2.715, 0.992, 0.968]} rotation={[-Math.PI, 1.024, -Math.PI]} />
      <mesh geometry={nodes.Cylinder034.geometry} material={materials.details} position={[-2.798, 0.99, 0.925]} rotation={[Math.PI, -1.158, Math.PI]} />
      <mesh geometry={nodes.Cylinder035.geometry} material={materials.details} position={[-2.798, 0.991, 0.991]} rotation={[Math.PI, -1.302, Math.PI]} />
      <mesh geometry={nodes.Cylinder036.geometry} material={materials.details} position={[-2.736, 0.993, 0.859]} rotation={[0, -0.595, 0]} />
      <mesh geometry={nodes.Cylinder037.geometry} material={materials.details} position={[-2.7, 0.991, 1.06]} rotation={[0, -1.367, 0]} />
      <mesh geometry={nodes.Cylinder038.geometry} material={materials.details} position={[-2.775, 0.993, 0.788]} rotation={[0, -1.536, 0]} />
      <mesh geometry={nodes.Cylinder039.geometry} material={materials.details} position={[-2.654, 0.888, 0.852]} rotation={[-1.463, 0.04, -2.999]} />
      <mesh geometry={nodes.Plane017.geometry} material={materials.details} position={[-0.969, 0.768, -3.042]} rotation={[0, -0.392, 0]} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials.details} position={[-1.245, 0.761, -2.768]} />
      <mesh geometry={nodes.Cube042.geometry} material={materials.details} position={[-1.246, 0.801, -2.756]} rotation={[-1.396, 0.133, -1.05]} scale={1.066} />
      <mesh geometry={nodes.Cube043.geometry} material={materials.details} position={[-1.265, 0.899, -2.786]} rotation={[1.395, 0.141, 2.14]} scale={1.066} />
      <mesh geometry={nodes.Cube044.geometry} material={materials.details} position={[-1.235, 0.801, -2.769]} rotation={[-1.74, 0.14, 0.766]} scale={1.066} />
      <mesh geometry={nodes.Cube045.geometry} material={materials.details} position={[-1.244, 0.801, -2.774]} rotation={[-1.79, 0.012, 1.397]} scale={1.066} />
      <mesh geometry={nodes.Cube046.geometry} material={materials.details} position={[-1.249, 0.801, -2.765]} rotation={[-1.464, -0.192, -2.751]} scale={1.066} />
      <mesh geometry={nodes.Cube047.geometry} material={materials.details} position={[-1.217, 0.896, -2.752]} rotation={[1.706, -0.395, 0.581]} scale={1.066} />
      <mesh geometry={nodes.Cube048.geometry} material={materials.details} position={[-1.231, 0.899, -2.774]} rotation={[1.511, -0.196, 2.416]} scale={1.066} />
      <mesh geometry={nodes.Cube055.geometry} material={materials.details} position={[-2.604, 1.739, 0.441]} rotation={[-1.396, 0.133, -1.05]} scale={1.066} />
      <mesh geometry={nodes.Cube056.geometry} material={materials.details} position={[-2.623, 1.837, 0.411]} rotation={[1.395, 0.141, 2.14]} scale={1.066} />
      <mesh geometry={nodes.Cube057.geometry} material={materials.details} position={[-2.592, 1.739, 0.428]} rotation={[-1.74, 0.14, 0.766]} scale={1.066} />
      <mesh geometry={nodes.Cube058.geometry} material={materials.details} position={[-2.601, 1.739, 0.423]} rotation={[-1.79, 0.012, 1.397]} scale={1.066} />
      <mesh geometry={nodes.Cube059.geometry} material={materials.details} position={[-2.606, 1.739, 0.432]} rotation={[-1.464, -0.192, -2.751]} scale={1.066} />
      <mesh geometry={nodes.Cube060.geometry} material={materials.details} position={[-2.574, 1.833, 0.445]} rotation={[1.706, -0.395, 0.581]} scale={1.066} />
      <mesh geometry={nodes.Cube061.geometry} material={materials.details} position={[-2.588, 1.837, 0.423]} rotation={[1.511, -0.196, 2.416]} scale={1.066} />
      <mesh geometry={nodes.Plane024.geometry} material={materials.details} position={[2.192, 0.825, -0.442]} rotation={[0.861, -1.238, 0.878]} />
      <mesh geometry={nodes.Cube049.geometry} material={materials.details} position={[-1.679, 0.769, -2.849]} />
      <mesh geometry={nodes.Cube050.geometry} material={materials.details} position={[-1.244, 0.817, -2.762]} rotation={[-1.774, 0.433, 2.569]} />
      <mesh geometry={nodes.Cube062.geometry} material={materials.details} position={[-2.601, 1.755, 0.435]} rotation={[-1.774, 0.433, 2.569]} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials.details} position={[-1.253, 0.762, -3.224]} rotation={[0, -0.748, 0]} scale={1.225} />
      <mesh geometry={nodes.Cylinder042.geometry} material={materials.details} position={[-2.012, 0.762, -2.969]} rotation={[0, -0.748, 0]} scale={1.225} />
      <group position={[0.109, 0.758, -3.104]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.details} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.glow} />
      </group>
      <mesh geometry={nodes.Cube054.geometry} material={materials.details} position={[-2.601, 1.844, 0.422]} rotation={[-1.601, 0.086, -2.979]} />
      <mesh geometry={nodes.Cylinder045.geometry} material={materials.details} position={[-2.602, 1.699, 0.429]} />
      <mesh geometry={nodes.sm_vase003.geometry} material={materials.details} position={[-2.623, 1.698, 0.066]} rotation={[0, -Math.PI / 2, 0]} scale={[0.084, 0.065, 0.084]} />
      <mesh geometry={nodes.sm_vase004.geometry} material={materials.details} position={[-2.652, 0.505, 1.457]} rotation={[0, -Math.PI / 2, 0]} scale={[0.088, 0.106, 0.088]} />
      <mesh geometry={nodes.sm_vase002.geometry} material={materials.details} position={[-2.724, 0.755, -3.028]} rotation={[0, -Math.PI / 2, 0]} scale={[0.071, 0.065, 0.071]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.details} position={[2.891, 2.889, 4.322]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.sm_light_switch.geometry} material={materials.details} position={[-2.254, 1.61, 4.281]} rotation={[0, -Math.PI / 2, 0]} scale={0.864} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials.details} position={[2.89, 2.889, -3.414]} rotation={[Math.PI, 0, Math.PI]} scale={[0.962, 1, 1]} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials.details} position={[-2.254, 2.889, 4.305]} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.details} position={[-2.255, 2.889, 4.278]} rotation={[0, 0, -Math.PI / 2]} scale={[0.747, 1, 1]} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.details} position={[-2.256, 2.886, 4.291]} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials.details} position={[2.902, 2.886, -2.022]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cylinder014.geometry} material={materials.details} position={[-0.008, 2.886, -3.427]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials.details} position={[2.895, 2.889, -2.029]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.details} position={[2.905, 1.069, -2.029]} scale={1.172} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.details} position={[-0.863, 0.77, -3.291]} rotation={[0, -0.771, 0]} scale={1.225} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.details} position={[-0.005, 2.889, -3.428]} rotation={[Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.details} position={[-0.005, 1.069, -3.438]} rotation={[0, Math.PI / 2, 0]} scale={1.172} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials.details} position={[-0.725, 0.76, -2.944]} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.details} position={[-1.177, 0.76, -3.074]} scale={[1, 0.494, 1]} />
      <group position={[2.717, 0.928, 0.37]} rotation={[Math.PI / 2, -1.335, Math.PI / 2]} scale={1.14}>
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.details} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.glow} />
      </group>
      <mesh geometry={nodes.Cylinder046.geometry} material={materials.details} position={[2.18, 0.822, -0.236]} rotation={[2.009, -0.178, 0.813]} scale={0.918} />
      <mesh geometry={nodes.Cylinder024.geometry} material={materials.details} position={[-2.741, 0.774, -1.73]} rotation={[-1.636, 0.046, -0.615]} />
      <mesh geometry={nodes.Cylinder047.geometry} material={materials.details} position={[-2.784, 0.876, -1.562]} rotation={[-Math.PI, 0.494, -Math.PI]} />
      <mesh geometry={nodes.Cylinder048.geometry} material={materials.details} position={[-2.673, 0.774, -1.529]} rotation={[-1.498, 0.031, -2.74]} />
    </group>
  )
}

useGLTF.preload('/art_studio.glb')
