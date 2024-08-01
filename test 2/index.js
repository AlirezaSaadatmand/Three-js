import * as THREE from "three";
import { TetrahedronGeometry } from "three";

const width = window.innerWidth;
const height = window.innerHeight;

// Scene
const scene = new THREE.Scene();

// shape
// const geometry = ;
// const material = ;

const geometry = new THREE.SphereGeometry(1 , 64 , 64); 
const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } ); 
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );

// camera
const camera = new THREE.PerspectiveCamera(45 , width / height , 0.1 , 1000);
camera.position.z = 5;
scene.add(camera);

// light
const light = new THREE.PointLight(0xffffff , 1 ,100);
light.position.set( 5, 5, 5 );
scene.add(light);

const light2 = new THREE.HemisphereLight(0xffffff , 0x000000);
scene.add(light2);

// renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width , height);

document.body.appendChild(renderer.domElement);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene , camera);
}
animate();