import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdditiveBlending } from 'three';

const buildParticlePositions = (count, spreadX, spreadY, spreadZ) => {
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
        const offset = index * 3;

        positions[offset] = (Math.random() - 0.5) * spreadX;
        positions[offset + 1] = (Math.random() - 0.5) * spreadY;
        positions[offset + 2] = (Math.random() - 0.5) * spreadZ;
    }

    return positions;
};

const outerParticlePositions = buildParticlePositions(180, 16, 10, 10);
const innerParticlePositions = buildParticlePositions(70, 8, 5, 6);

const SceneRig = ({ children }) => {
    const rigRef = useRef(null);
    const { pointer } = useThree();

    useFrame((_, delta) => {
        if (!rigRef.current) {
            return;
        }

        rigRef.current.rotation.y += (pointer.x * 0.18 - rigRef.current.rotation.y) * 3.4 * delta;
        rigRef.current.rotation.x += (-pointer.y * 0.12 - rigRef.current.rotation.x) * 3.4 * delta;
        rigRef.current.position.x += (pointer.x * 0.35 - rigRef.current.position.x) * 2.8 * delta;
        rigRef.current.position.y += (pointer.y * 0.2 - rigRef.current.position.y) * 2.8 * delta;
    });

    return <group ref={rigRef}>{children}</group>;
};

const SceneCluster = () => {
    const clusterRef = useRef(null);
    const torusRef = useRef(null);
    const icosahedronRef = useRef(null);
    const orbRef = useRef(null);
    const haloRef = useRef(null);
    const shellRef = useRef(null);
    const ribbonRef = useRef(null);
    const particleFieldRef = useRef(null);
    const particleCoreRef = useRef(null);
    const { pointer } = useThree();

    useFrame((state, delta) => {
        const elapsedTime = state.clock.getElapsedTime();

        if (clusterRef.current) {
            clusterRef.current.rotation.y += delta * 0.12;
            clusterRef.current.rotation.x = Math.sin(elapsedTime * 0.3) * 0.08 + pointer.y * 0.1;
            clusterRef.current.rotation.z += (pointer.x * 0.08 - clusterRef.current.rotation.z) * 2.4 * delta;
            clusterRef.current.position.x += (pointer.x * 0.45 - clusterRef.current.position.x) * 2.2 * delta;
            clusterRef.current.position.y += (pointer.y * 0.18 - 0.2 - clusterRef.current.position.y) * 2.2 * delta;
        }

        if (torusRef.current) {
            torusRef.current.rotation.x += delta * 0.35;
            torusRef.current.rotation.z += delta * 0.18;
        }

        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.y -= delta * 0.22;
            icosahedronRef.current.position.y = -0.8 + Math.sin(elapsedTime * 1.1) * 0.18;
        }

        if (orbRef.current) {
            orbRef.current.position.x = 0.5 + Math.sin(elapsedTime * 0.8) * 0.45;
            orbRef.current.position.y = 1.5 + Math.cos(elapsedTime * 1.2) * 0.2;
            orbRef.current.rotation.y += delta * 0.45;
            const orbScale = 1 + Math.sin(elapsedTime * 1.7) * 0.08;
            orbRef.current.scale.setScalar(orbScale);
        }

        if (shellRef.current) {
            shellRef.current.rotation.x -= delta * 0.2;
            shellRef.current.rotation.y += delta * 0.28;
            const shellScale = 1 + Math.cos(elapsedTime * 1.2) * 0.04;
            shellRef.current.scale.setScalar(shellScale);
        }

        if (haloRef.current) {
            haloRef.current.rotation.z += delta * 0.08;
            haloRef.current.scale.x = 1 + Math.sin(elapsedTime * 1.4) * 0.04;
            haloRef.current.scale.y = 1 + Math.cos(elapsedTime * 1.1) * 0.05;
        }

        if (ribbonRef.current) {
            ribbonRef.current.rotation.x = -Math.PI / 2 + Math.sin(elapsedTime * 0.45) * 0.05;
            ribbonRef.current.rotation.z += delta * 0.06;
        }

        if (particleFieldRef.current) {
            particleFieldRef.current.rotation.y += delta * 0.015;
            particleFieldRef.current.rotation.x = Math.sin(elapsedTime * 0.18) * 0.08;
        }

        if (particleCoreRef.current) {
            particleCoreRef.current.rotation.y -= delta * 0.025;
            particleCoreRef.current.position.x = pointer.x * 0.1;
            particleCoreRef.current.position.y = pointer.y * 0.08;
        }
    });

    return (
        <>
            <fog attach="fog" args={['#020617', 8, 24]} />
            <ambientLight intensity={1.4} />
            <directionalLight position={[4, 5, 3]} intensity={2.2} color="#7dd3fc" />
            <pointLight position={[-4, -1, 2]} intensity={18} color="#38bdf8" distance={18} />
            <pointLight position={[3, 2, -2]} intensity={14} color="#e0f2fe" distance={14} />

            <group ref={clusterRef} position={[0.4, -0.2, 0]}>
                <mesh ref={haloRef} position={[0.1, -0.1, -2.2]} rotation={[-Math.PI / 2, 0.1, 0.2]}>
                    <ringGeometry args={[2.9, 3.8, 96]} />
                    <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
                </mesh>

                <mesh ref={torusRef} position={[1.4, 0.2, 0]}>
                    <torusKnotGeometry args={[1.15, 0.28, 220, 28]} />
                    <meshStandardMaterial
                        color="#38bdf8"
                        emissive="#0ea5e9"
                        emissiveIntensity={0.7}
                        metalness={0.62}
                        roughness={0.16}
                    />
                </mesh>

                <mesh ref={icosahedronRef} position={[-1.9, -0.8, -0.9]}>
                    <icosahedronGeometry args={[0.95, 1]} />
                    <meshPhysicalMaterial
                        color="#e0f2fe"
                        emissive="#7dd3fc"
                        emissiveIntensity={0.35}
                        metalness={0.15}
                        roughness={0.08}
                        transmission={0.3}
                        thickness={0.8}
                        clearcoat={1}
                    />
                </mesh>

                <mesh ref={orbRef} position={[0.5, 1.5, -1.6]}>
                    <sphereGeometry args={[0.58, 64, 64]} />
                    <meshPhysicalMaterial
                        color="#67e8f9"
                        emissive="#22d3ee"
                        emissiveIntensity={0.85}
                        roughness={0.1}
                        metalness={0.15}
                        transmission={0.42}
                        thickness={1.4}
                        transparent
                        opacity={0.95}
                    />
                </mesh>

                <mesh ref={shellRef} position={[0.5, 1.5, -1.6]}>
                    <icosahedronGeometry args={[0.88, 2]} />
                    <meshBasicMaterial color="#e0f7ff" wireframe transparent opacity={0.18} />
                </mesh>

                <mesh ref={ribbonRef} position={[0.3, -2.15, -1.9]} rotation={[-Math.PI / 2, 0.15, 0.2]}>
                    <torusGeometry args={[2.8, 0.07, 16, 128]} />
                    <meshBasicMaterial color="#38bdf8" transparent opacity={0.18} />
                </mesh>

                <mesh position={[0.2, -2.2, -1.8]} rotation={[-Math.PI / 2, 0.1, 0.2]}>
                    <ringGeometry args={[2.5, 3.1, 96]} />
                    <meshBasicMaterial color="#38bdf8" transparent opacity={0.22} />
                </mesh>

                <mesh position={[-1.1, -2.0, -2.6]} rotation={[-Math.PI / 2, -0.2, -0.5]}>
                    <ringGeometry args={[1.5, 1.72, 72]} />
                    <meshBasicMaterial color="#bae6fd" transparent opacity={0.18} />
                </mesh>
            </group>

            <points ref={particleFieldRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[outerParticlePositions, 3]}
                        count={outerParticlePositions.length / 3}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#7dd3fc"
                    size={0.065}
                    sizeAttenuation
                    transparent
                    opacity={0.65}
                    depthWrite={false}
                    blending={AdditiveBlending}
                />
            </points>

            <points ref={particleCoreRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[innerParticlePositions, 3]}
                        count={innerParticlePositions.length / 3}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#ffffff"
                    size={0.09}
                    sizeAttenuation
                    transparent
                    opacity={0.35}
                    depthWrite={false}
                    blending={AdditiveBlending}
                />
            </points>
        </>
    );
};

const HeroCanvas = () => {
    useEffect(() => {
        const previousTouchAction = document.body.style.touchAction;
        document.body.style.touchAction = 'pan-y';

        return () => {
            document.body.style.touchAction = previousTouchAction;
        };
    }, []);

    return (
        <div className="hero-three-canvas" aria-hidden="true">
            <Canvas
                dpr={[1, 1.75]}
                camera={{ position: [0, 0, 8], fov: 42 }}
                gl={{ antialias: true, alpha: true }}
            >
                <SceneRig>
                    <SceneCluster />
                </SceneRig>
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
