function cylinder_anim(rootId, width, height) {
	// revolutions per second
	var p4_angularSpeed = 0.2; 
	var p4_lastTime = 0;
	var p_canvas = null;

	// this function is executed on each animation frame
	function p4_animate(){
		// update
		var time = (new Date()).getTime();
		var timeDiff = time - p4_lastTime;
		var angleChange = p4_angularSpeed * timeDiff * 2 * Math.PI / 1000;
		cylinder.rotation.x += angleChange;
		p4_lastTime = time;

		// render
		renderer.render(scene, camera);

		// request new frame
		requestAnimationFrame(function(){
			p4_animate();
		});
	}

	// renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	  
	if( p_canvas == null )
	{
		var p4 = document.getElementById(rootId);
		p_canvas = renderer.domElement;
		p4.appendChild(p_canvas);
    }

	// camera
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 700;

	// scene
	var scene = new THREE.Scene();
			
	// cylinder
	// API: THREE.CylinderGeometry(bottomRadius, topRadius, height, segmentsRadius, segmentsHeight)
	var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(100, 100, 400, 50, 50, false), new THREE.MeshNormalMaterial());
	cylinder.overdraw = true;
	scene.add(cylinder);

	// start animation
	p4_animate();
}