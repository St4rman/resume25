"use client"

import { useFrame } from '@react-three/fiber'
import React from 'react';
import { useRef } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Model =() =>{
    return (
        <>
        <div className='h-[30vh] lg:h-[50vh]'>
        <Canvas >  
            < Scene/>
            <ambientLight intensity={0.9} />
        </Canvas>
        </div>
        
        </>
    );
}

export default Model;

function Scene() {
    
    const gltf = useLoader(GLTFLoader, 'assets/scene.glb')
    const myMesh = React.useRef();

  

    useFrame(({clock}) => {
        const delta = Math.sin(clock.elapsedTime);
        myMesh.current.position.y += delta* 0.005;
        myMesh.current.rotation.z -= 0.01;
    })


    return (
        <>
        <mesh ref={myMesh} position={[-10,-1,-10]} rotation={[90, 90, 0]}>
             <primitive object={gltf.scene} scale={1.3} />
        </mesh>
           
        </>
   
);
}