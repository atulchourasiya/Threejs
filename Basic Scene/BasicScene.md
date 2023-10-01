# Lesson 1 - Basic Scene

## How to create scene
- First we need to create a scene 
- Second we need to create a geometry 
- Third we need to create a material and also add texture or color to the material for better view
- Fourth we need to create mesh and add the geometry and material to the mesh
- Fifth we need to add it to the scene

## How to add camera
Here we are going to see the example of perspective camera
- Meaning if the object is far from the camera it will look small and if the object is close it will look bigger
- Second thing we need to keep in mind is field of view 
- Bigger the field of view means more distortion will be happen 
- Smaller the field of view mean more clear and specific the view like looking something with the scope
- We also called it FOV
- Next thing is aspect ratio : size.width / size.height

## How to add to the scene to the canvas
```
const renderer = new THREE.WebGLRenderer({
   canvas : canvas
}) 
renderer.setSize(sizes.width ,sizes.height)
renderer.render(scene,camera)
```
- we can change camera position by camera.position.x = 1
