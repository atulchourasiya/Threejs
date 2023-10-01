import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//Time
// let time = Date.now()

// Clock 
const clock = new THREE.Clock();

const tick =()=>{
    //Time
    // const current = Date.now()
    // const deltaTime = current - time
    // mesh.rotation.y = deltaTime
    // mesh.rotation.x = deltaTime

    //Update Object
    const elapsedTime =clock.getElapsedTime();

    //Rotation
    mesh.rotation.y = elapsedTime
    mesh.rotation.x = elapsedTime

    //Sin and Cos
    // mesh.position.x =0.1 * elapsedTime * Math.sin(elapsedTime);
    // mesh.position.y =0.1 * elapsedTime *  Math.cos(elapsedTime);

    renderer.render(scene, camera)
    console.log('tick')
    window.requestAnimationFrame(tick)
}

//Gsap Animation
// console.log(gsap)
gsap.to(mesh.position,{duration: 1 , delay : 1, x:2})
gsap.to(mesh.position,{duration: 1 , delay : 2, x:0})

tick()