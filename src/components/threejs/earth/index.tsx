import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DogModel } from "../../../models";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import { styles } from "./styles";
import * as THREE from "three";
import { useTheme } from "@mui/material";
import { Earth } from "../../../models/threejs/Earth";

function Camera() {
    const camera = useRef<any>();

    const initialPosition = new THREE.Vector3(6, 3, 8);
    const lookAt = new THREE.Vector3(0, 2, 0);

    const [position] = useState(initialPosition);

    useFrame(() => {
        camera?.current.lookAt(lookAt);
    });

    return <PerspectiveCamera ref={camera} makeDefault position={position} />;
}

export function Earth3d() {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={false}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
}
