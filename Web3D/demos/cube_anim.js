var cubeCanvas = null;
function cube_anim(rootId, width, height) {
  // revolutions per second
  var p2_angularSpeed = 0.2; 
  var p2_lastTime = 0;
  

  // this function is executed on each animation frame
  function p2_animate(){
	// update
	var time = (new Date()).getTime();
	var timeDiff = time - p2_lastTime;
	var angleChange = p2_angularSpeed * timeDiff * 2 * Math.PI / 1000;
	cube.rotation.y += angleChange;
	p2_lastTime = time;

	// render
	renderer.render(scene, camera);

	// request new frame
	requestAnimationFrame(function(){
		p2_animate();
	});
  }

  // renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  
  if( cubeCanvas == null)
  {
	  var p2 = document.getElementById(rootId);
	  var cubeCanvas = renderer.domElement;
	  p2.appendChild(cubeCanvas);
  }

  // camera
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;

  // scene
  var scene = new THREE.Scene();
			
  // cube
  var cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
  cube.overdraw = true;
  scene.add(cube);

  // start animation
  p2_animate();
}