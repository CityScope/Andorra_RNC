// dat.GUI
var gui = new dat.GUI({
	width: 300
});
var params = {
	rotSpeed: 0.0001,
	paths: false,
	amen: true,
	camera: 'top view'
};

//camera spin

gui.add(params, 'camera', ['rotate', 'free', 'top view'])
	.onChange(function (c) {
		if (c == 'rotate') {
			camSpin();
		} else if (c == 'free') {
			cancelSpin();
		} else if (c == 'top view') {
			topCam();
		}
	});

//rotation speed
gui.add(params, "rotSpeed", 0, 0.0010).name("Rotation Speed");


gui.add(params, "paths").name("Users paths").onChange(function (bool) {
	if (pplLinesGrp != null) {
		pplLinesGrp.visible = bool;
		// clear path shown on last session 
		if (bool) {
			for (var i = pplLinesGrp.children.length - 1; i >= 0; i--) {
				pplLinesGrp.children[i].visible = false;
			}
		}
	}
});

//amenities 
gui.add(params, "amen").name("Amenities").onChange(function (bool) {
	if (amenGrp != null) {
		amenGrp.visible = bool;

		//[WIP] attempt to put things on mesh 
		// if (bool) {
		// 	for (let i = 0; i < amenGrp.children.length; i++) {
		// 		var ray = new THREE.Raycaster();
		// 		ray.params.Points.threshold = 0.1;
		// 		var int = ray.set(amenGrp.children[i].position, new THREE.Vector3(0, -1, 0));
		// 		console.log(ray);
		// 	}
		// }
	}
});
