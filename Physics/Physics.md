## Lesson - Physics
3D Physics Libraries 
- Ammo.js
- Cannon.js
- Oimo.js

2D Physics libraries
- Matter.js
- P2.js
- Planck.js
- Box2D.js

There are solutions trying to combine Three.js with physics library like **Physijs**

Ammo.js is most used library but we will use cannon.js

## Importing Cannon.js in your project 
- npm i cannon
import CANNON from 'cannon'

## Creating the physics world 
- const world = new CANNON.World();

## Adding graviy
CANNON.js inherit from vec3
class just like three.js is inherit from vec3 class
- world.gravity.set(0,-9.82,0)

## How to create an object in physics world         
- In three.js we have something called mesh but in cannon world we have body
- To Create a body we need to  create a shape. we have many shapes
  - box
  - Cylinder
  - Plane
  - Sphere
  - Etc
we can create shapes like 
```
const sphereShape = new CANNON.Sphere(0.5)
```
- Then we need to create a body
```
const sphereBody = new CANNON.Body({
   mass:1,
   position : new CANNON.Vec3(0,3,0),
   shape: sphereShape
})
```
Then we need to add the body to thre physics world like this
```
world.addBody(sphereBody);
```

## How to update physics world
