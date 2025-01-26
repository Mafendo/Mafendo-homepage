"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three-stdlib";
import { Spinner, Box } from "@chakra-ui/react";

const ThreePage = ({ color }) => {
    const canvasRef = useRef(null);
    const modelRef = useRef(null);
    const sceneRef = useRef(null); // Reference for the scene
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        sceneRef.current = scene; // Store the scene reference
        const camera = new THREE.PerspectiveCamera(
            75,
            640 / 640, // Aspect ratio for 640px by 640px
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(640, 640);
        renderer.setPixelRatio(window.devicePixelRatio);
        scene.background = new THREE.Color(color); // Set initial background color

        // Load the 3D model
        const loader = new GLTFLoader();
        loader.load(
            "/models/msn-04_sazabi/scene.gltf",
            (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                modelRef.current = model;
        
                // Optionally, adjust the scale and position
                model.scale.set(1, 1, 1);
                model.position.set(0, 0, 0);
        
                // Calculate the bounding box of the model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
        
                // Reposition the model to be centered
                model.position.x += model.position.x - center.x;
                model.position.y += model.position.y - center.y;
                model.position.z += model.position.z - center.z;
        
                // Adjust the camera position based on the model's size
                const maxDim = Math.max(size.x, size.y, size.z);
                const fov = camera.fov * (Math.PI / 180); // Convert FOV to radians
                const cameraZ = Math.abs(maxDim / Math.tan(fov / 2)) * 0.8;
                camera.position.set(0, maxDim / 2, cameraZ);
                camera.lookAt(center);
        
                // Add a "force spin" effect on load
                let rotationSpeed = 0.2; // Initial high speed for spinning
                const spinDuration = 2000; // Duration of the force spin in milliseconds
                const startTime = performance.now();
        
                const spinEffect = () => {
                    const currentTime = performance.now();
                    const elapsedTime = currentTime - startTime;
        
                    if (elapsedTime < spinDuration) {
                        // Gradually slow down the rotation speed
                        rotationSpeed *= 0.5;
                        model.rotation.y += rotationSpeed;
                        requestAnimationFrame(spinEffect);
                    } else {
                        // Stop the force spin after the duration
                        rotationSpeed = 0;
                    }
                };
        
                spinEffect(); // Start the force spin
        
                // Hide the spinner once the model is loaded
                setLoading(false);
            },
            undefined,
            (error) => {
                console.error(error);
                setLoading(false); // Stop loading spinner on error
            }
        );
        

        // Set up lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // Add orbit controls to move the camera with mouse
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth movement
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;

        const animate = function () {
            requestAnimationFrame(animate);

            // Optional: Rotate the model
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01;
            }

            // Update the controls
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            controls.dispose();
        };
    }, []); // Run once on mount

    useEffect(() => {
        // Update background color dynamically
        if (sceneRef.current) {
            sceneRef.current.background = new THREE.Color(color);
        }
    }, [color]); // Rerun when `color` changes

    return (
        <Box position="relative" width="640px" height="640px">
            {loading && (
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="10"
                >
                    <Spinner size="xl" thickness="4px" speed="0.65s" color="grey.500" />
                </Box>
            )}
            <canvas ref={canvasRef} />
        </Box>
    );
};

export default ThreePage;
