function plan_anim(rootId, width, height) {
  // revolutions per second
  var p1_angularSpeed = 0.2; 
  var p1_lastTime = 0;
  var p1_canvas = null;

  // this function is executed on each animation frame
  function p1_animate(){
	// update
	var time = (new Date()).getTime();
	var timeDiff = time - p1_lastTime;
	var angleChange = p1_angularSpeed * timeDiff * 2 * Math.PI / 1000;
	plane.rotation.z += angleChange;
	p1_lastTime = time;

	// render
	renderer.render(scene, camera);

	// request new frame
	requestAnimationFrame(function(){
		p1_animate();
	});
  }

  // renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  if( p1_canvas == null )
  {
		var p1 = document.getElementById("p1");
		p1_canvas = renderer.domElement;
		p1.appendChild(p1_canvas);
  }

  // camera
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.y = -450;
  camera.position.z = 400;
  camera.rotation.x = 45 * (Math.PI / 180);

  // scene
  var scene = new THREE.Scene();

  // plane
  var plane = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshNormalMaterial());
  plane.overdraw = true;
  scene.add(plane);

  // start animation
  p1_animate();
}