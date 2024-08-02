import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

// Renerer
const renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(width , height);

document.body.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75 , width/height , 0.01 , 1000);
camera.position.set(2 , 4 , 5);

const controls = new OrbitControls(camera , renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;


const planeMesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2 , 4),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 , flatShading: true })
);
scene.add(planeMesh);

const groundMesh = new THREE.Mesh(
    new THREE.BoxGeometry(20 , 1 , 20),
    new THREE.MeshStandardMaterial({color: 0xffffff})
);
groundMesh.position.y = -2;
scene.add(groundMesh);

// Light
const light = new THREE.DirectionalLight(0xffffff , 1);
light.position.set(5 , 5 , 5);
scene.add(light);

const light2 = new THREE.HemisphereLight( 0xffffff , 0x000000 , 1);
scene.add(light2);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene , camera);
}
animate()