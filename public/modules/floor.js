import * as THREE from "three";


export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  // Load the textures
  const colorTexture = textureLoader.load(
    "/public/img/www.jpg"
  );
  const displacementTexture = textureLoader.load(
    "/public/img//woodisplace.png"
  );
  const normalTexture = textureLoader.load(
    "/public/img//www.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "/public/img//woodrough.png"
  );
  const aoTexture = textureLoader.load(
    "/public/img//woodao.png"
  );

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};
