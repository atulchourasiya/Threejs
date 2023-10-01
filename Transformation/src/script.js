import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Sizes
const sizes = {
    width: 800,
    height: 600
}


//Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


// Mesh Position 
mesh.position.z = 0
mesh.position.x = 0
mesh.position.y = 0
mesh.position.set(1, 1, 1);

// Mesh Scale
mesh.scale.x = 0
mesh.scale.y = 0
mesh.scale.z = 0
mesh.scale.set(1, 1, 1);

// Mesh Rotation
mesh.rotation.reorder("YXZ")
mesh.rotation.x = 1
mesh.rotation.y = 1
mesh.rotation.z = 1

// Mesh Length
console.log(mesh.position.length())

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = -3
// camera.position.x = 1
// camera.position.y = 1

//Using PI to rotate 180deg
camera.rotation.y = Math.PI
scene.add(camera)

//To Look At Certain Object
camera.lookAt(mesh.position)

//Mesh Distance From Camera
console.log(mesh.position.distanceTo(camera.position))

//Group
const group = new THREE.Group()
scene.add(group);

//Cube 1
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)
cube1.position.x = 1
group.add(cube1)

//Cube 2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
group.add(cube2)

//Cube 3
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube3.position.x = -1
group.add(cube3)

//Whole Group Shift Upward
group.position.y = 0

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)