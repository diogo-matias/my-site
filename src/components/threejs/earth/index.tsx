import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DogModel } from "../../../models";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import { styles } from "./styles";
import * as THREE from "three";
import { useTheme } from "@mui/material";
import { Earth } from "../../../models/threejs/Earth";
import { ManCoding3d } from "../spline";

export function Earth3d() {
    return (
        <Suspense fallback={false}>
            <Canvas>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </Suspense>
    );
}
