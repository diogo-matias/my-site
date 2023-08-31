import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { styles } from "./styles";
import { CircularProgress, Typography, useTheme } from "@mui/material";
import { ManCoding3d } from "../spline";
import { Scene } from "../spline/faster";

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
    function renderProgress() {
        return (
            <div style={styles.loadingContainer}>
                <CircularProgress disableShrink size={"10vw"} color="primary" />
            </div>
        );
    }

    function renderImage() {
        return (
            <div style={styles.loadingContainer}>
                <div>
                    <img
                        style={{ width: 1900 }}
                        src="./images/home-image.png"
                    />
                </div>
            </div>
        );
    }

    return (
        <Suspense fallback={renderImage()}>
            <Canvas style={styles.canvas} shadows flat linear>
                <ManCoding3d />

                <CustomOrbitControls />
            </Canvas>
        </Suspense>
        // renderImage()
    );
}
