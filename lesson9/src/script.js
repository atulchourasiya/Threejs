import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//color.jpg is not available in src because i removed
// import imageSource from './color.jpg'
// console.log(imageSource)

//Texture
// const image = new Image()
// const texture = new THREE.Texture(image)
// image.onload = ()=>{
//     texture.needsUpdate = true;
//  }
// image.src ='/textures/door/color.jpg'

//TextureLoader
const LoadingManager = new THREE.LoadingManager()

// LoadingManager.onStart = () => {
//     console.log('onStart')
// }

// LoadingManager.onProgress = () => {
//     console.log('onProgess')
// }

// LoadingManager.onLoad = () => {
//     console.log('onLoad')
// }

// LoadingManager.onError = () => {
//     console.log('onError')
// }

const TextureLoader = new THREE.TextureLoader(LoadingManager)

const colorTexture = TextureLoader.load('/textures/door/color.jpg');

//Transformation

// colorTexture.repeat.x = 6
// colorTexture.repeat.y = 6
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping
// colorTexture.wrapS = THREE.MirroredRepeatWrapping
// colorTexture.wrapT = THREE.MirroredRepeatWrapping

// colorTexture.offset.x = 3
// colorTexture.offset.y = 3

// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;

// colorTexture.rotation =  Math.PI /4

//Filtering and MipMapping

// const alphaTexture = TextureLoader.load('/textures/door/alpha.jpg');
// const heightTexture = TextureLoader.load('/textures/door/height.jpg');
// const normalTexture = TextureLoader.load('/textures/door/normal.jpg');
// const ambientOcclusionTexture = TextureLoader.load('/textures/door/ambientOcclusion.jpg');
// const metalnessTexture = TextureLoader.load('/textures/door/metalness.jpg');
// const roughnessTexture = TextureLoader.load('/textures/door/roughness.jpg');

    // () => {
    //     console.log('load')
    // },
    // () => {
    //     console.log('progress')
    // },
    // () => {
    //     console.log('err')
    // })


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
// console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()