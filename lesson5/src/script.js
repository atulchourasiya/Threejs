import './style.css'
import * as THREE from 'three'
import { PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
/**
 * Base
 */
// cursor
const cursor = {
    x:0,
    y:0
}
window.addEventListener('mousemove',(event)=>{
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 400
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera

// PerspectiveCamera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)

// first parameter is verticle viewing angle 
// second parameter aspect ratio = width of the render / height of the render
// third parameter is near 
// fourth parameter is far


//Orthographic Camera

// const aspectRatio = sizes.width/sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio,1,-1,1,100)

//left
//right
//top
//bottom


// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

console.log(camera.position.length());

//Controls
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
// controls.target.y = 2;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update Camera
    controls.update();

    // camera.position.x = Math.sin(cursor.x *  Math.PI *2)*3;
    // camera.position.z = Math.cos(cursor.x * Math.PI *2)*3;
    // camera.position.y = cursor.y *10;

    // camera.lookAt(new THREE.Vector3());


    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()