import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DogModel } from "../../../models";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { styles } from "./styles";
import * as THREE from "three";

function Camera() {
    const camera = useRef<any>();

    const initialPosition = new THREE.Vector3(8, 3, 5);
    const lookAt = new THREE.Vector3(0, 2, 0);

    const [position] = useState(initialPosition);

    useFrame(() => {
        camera?.current.lookAt(lookAt);
    });

    return <PerspectiveCamera ref={camera} makeDefault position={position} />;
}

export function Dog3D() {
    return (
        <Canvas style={styles.canvas}>
            <DogModel />
            <Camera />
            <directionalLight position={[0, 0, 10]} intensity={0.5} />
            <ambientLight intensity={0.5} />
            <OrbitControls
                autoRotate
                autoRotateSpeed={0.2}
                enableZoom={false}
            />
        </Canvas>
    );
}
