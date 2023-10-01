# Lesson 3 - Transformation 

### There are four properties to transform object 
- Position
- Scale
- Rotation
- Quaternion - like a rotation
Every object that inherit from object3D has four property like position, scale, rotation,quaternion

## How to change the position 
- It is better to change the position of mesh 
like mesh.position.z  = 1

## How to calculate the length from the center of the scene and the object position
- console.log(mesh.position.length)

## How to calculate the distance to camera and object 
- console.log(mesh.position.distanceTo(camera.position))

## How to normalize the position 
- mesh.position.normalize()

## How to update all three position at once 
- mesh.position.set(0.7,-0.6,1);

## How to use AxesHelper 
- const axesHelper  = new Three.AxesHelper();
- scene.add(axesHelper);

## How to scale the mesh
- mesh.scale.x = 2;
- mesh.scale.set(1,1,1)

## How to rotate the mesh 
- To rotate the mesh we have to way first is rotation property and another one is quaternion property.
- Rotation also has X,Y,Z properties but it's Euler
- One of the condition can be happen is gimbal lock to prevent this you have to change the order of the eular angle rotation by reposition like this object.rotation.reorder('yxz');

## Quternion 
- Using quternion you can get the same result by more mathematically calculated
- when you update quternion you update rotation and vica-versa

## Look At
- Look At is the Object3D property 
- We can use it in any object 
- camera.lookAt(mesh.position);

## Scene Graph 
- const group = new Three.Group();
-  scene.add(group);
- 
```
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)
cube1.position.x = 1
group.add(cube1)
```
- group.position.x = 1
- group.scale.y = 1
- group.rotation.x = 1
