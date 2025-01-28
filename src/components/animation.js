"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { WebGPURenderer } from "three/webgpu";
import * as TSL from "three/tsl";

export default function Animaatio() {
  useEffect(() => {
    const init = async () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Set up camera and scene
      const camera = new THREE.PerspectiveCamera(100, width / height, 0.01, 10);
      camera.position.z = 5; // Move camera further back for a better view

      const scene = new THREE.Scene();

      // Set up renderer
      const renderer = new WebGPURenderer({ antialias: true });
      await renderer.init();
      renderer.setSize(width, height);
      renderer.setAnimationLoop(animate);

      // Create canvas wrapper and append to document
      const canvasWrapper = document.createElement("div");
      canvasWrapper.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "bottom-0",
        "h-screen",
        "after:content-['']",
        "after:absolute",
        "after:top-0",
        "after:left-[50%]",
        "after:h-[100vw]",
        "after:w-[200vw]",
        "after:transform",
        "after:-translate-x-1/2",
        "after:translate-y-[50vh]",
        "after:opacity-50"
      );
      const canvasWrapperChild = document.createElement("div");
      canvasWrapperChild.classList.add(
        "relative",
        "w-full",
        "h-full",
        "overflow-hidden",
        "pointer-events-auto"
      );
      const canvasChildofChild = document.createElement("div");
      canvasChildofChild.classList.add(
        "w-full",
        "h-full"
      );
      document.body.appendChild(canvasWrapper);
      canvasWrapper.appendChild(canvasWrapperChild)
      canvasWrapperChild.appendChild(canvasChildofChild);
      canvasChildofChild.appendChild(renderer.domElement);

      // Load texture for image
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/muurola.jpg"); // Replace with your image path

      // Create a plane geometry for the image (3D object)
      const planeGeometry = new THREE.PlaneGeometry(5, 5); // Aspect ratio is 1:1, adjust size as needed
      const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

      // Add the plane to the scene
      scene.add(planeMesh);

      // Position the plane in 3D space
      planeMesh.position.set(0, 0, -2); // Position it in front of the camera

      // Set up animation loop
      function animate(time) {
        // Rotate the plane for 3D effect
        planeMesh.rotation.x = time / 2000;
        planeMesh.rotation.y = time / 1000;

        renderer.render(scene, camera);
      }

      // Log the backend type (WebGPU or WebGL)
      console.log(TSL.sqrt(2));
      console.log(
        renderer.backend.isWebGPUBackend ? "WebGPU Backend" : "WebGL Backend"
      );
    };
    init();
  }, []);

  return null;
}
