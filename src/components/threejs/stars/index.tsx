import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StarsModel } from "../../../models/threejs/Starts";

export function Stars3dBackground() {
    return (
        <div style={{ position: "absolute", zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarsModel />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
}
