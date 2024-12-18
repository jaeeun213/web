
const canvas = document.getElementById('3d-viewer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, 400);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  console.log(`이름: ${name}, 이메일: ${email}, 메시지: ${message}`);
  alert('의뢰가 성공적으로 전송되었습니다!');
  form.reset();
});
