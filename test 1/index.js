import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width , height);

document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov , aspect , near , far);
camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera , renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geo = new THREE.IcosahedronGeometry(1 , 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo , mat);
scene.add(mesh);

const light = new THREE.HemisphereLight(0xffffff , 0x000000);
scene.add(light);

const war = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});
const wire = new THREE.Mesh(geo , war);
mesh.add(wire);

function animate(t = 0){
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene , camera);
    controls.update();
}
animate();