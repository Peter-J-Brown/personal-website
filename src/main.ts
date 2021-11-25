import './style.css';
import * as THREE from 'three';
// import { GltfLoader } from 'gltf-loader-ts';

// SETUP
const scene = new THREE.Scene();

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// // STARS
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xff7f00  });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3).fill(100).map( ( ) => THREE.MathUtils.randFloatSpread(150));

//   star.position.set(x, y, z);
//   scene.add(star);
// }
// Array(300).fill(100).forEach(addStar);

// // ISLAND
// var obj: any;
// const loader: any = new GLTFLoader();
// loader.load( '/flying-island.glb', function ( gltf: any ) {
//   obj = gltf.scene
//   obj.scale.set(1.2,1.2,1.2)
// 	scene.add( gltf.scene )
// } );


// let loader: any = new GltfLoader();
// let uri: string='/flying-island.glb'
// let obj: any = await loader.load(uri);
// let gltf: any= obj.gltf;
// scene.add(gltf.scene)

// scene.position.x=2;
// scene.position.y=-0.5;
// scene.position.z=-3;

// LIGHTING
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// CAMERA
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(60);
camera.position.setX(-3);

// // Background
const spaceTexture = new THREE.TextureLoader().load('gradient.png');
scene.background = spaceTexture;

// Scroll Animation
function moveCamera() {
  const x = document.body.getBoundingClientRect().top;
  camera.position.z = x * -0.001;
  camera.position.x = x * -0.002;
  camera.rotation.y = x * 0.0003;
}
document.body.onscroll = moveCamera;
moveCamera();

// // RENDER
renderer.render(scene, camera);

// ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
//   obj.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();
