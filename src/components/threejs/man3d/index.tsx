import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { styles } from "./styles";
import * as THREE from "three";
import { CircularProgress, Typography, useTheme } from "@mui/material";
import { ManCoding3d } from "../spline";

function CustomOrbitControls() {
    const ref = useRef<any>();
    let timer = 0;

    useFrame((state, a, b) => {
        timer += 0.01;
        const controls = ref.current;
        const { elapsedTime } = state.clock;
        const rotationSpeed = 0.2;
        const currentAzimuthAngle = ref.current.getAzimuthalAngle();

        const AzimuthAngle =
            Math.sin(
                (currentAzimuthAngle + elapsedTime) * Math.PI * rotationSpeed
            ) * 0.2;

        controls.setAzimuthalAngle(AzimuthAngle);
    });

    return <OrbitControls ref={ref} enableZoom={false} reverseOrbit={true} />;
}

export function Man3d() {
    const theme = useTheme();

    function renderProgress() {
        return (
            <div style={styles.loadingContainer}>
                <CircularProgress disableShrink size={"10vw"} color="primary" />
            </div>
        );
    }

    return (
        <Suspense fallback={renderProgress()}>
            <Canvas style={styles.canvas} shadows flat linear>
                <ManCoding3d />
                <CustomOrbitControls />
            </Canvas>
        </Suspense>
    );
}
