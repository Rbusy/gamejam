function addNewPlayer(yolo) {
	player = yolo.physics.add.sprite(config.width / 2, (config.height / 2) + 360 , "dude").setScale(1.5, 1.5);

	yolo.anims.create({
		key: "down",
		frames: yolo.anims.generateFrameNumbers("dude", {start: 0, end: 0}),
		repeat: -1
	});
	yolo.anims.create({
		key: "up",
		frames: yolo.anims.generateFrameNumbers("dude", {start: 1, end: 1}),
		repeat: -1
	});
	yolo.anims.create({
		key: "right",
		frames: yolo.anims.generateFrameNumbers("dude", {start: 2, end: 2}),
		repeat: -1
	});
	yolo.anims.create({
		key: "left",
		frames: yolo.anims.generateFrameNumbers("dude", {start: 3, end: 3}),
		repeat: -1
	});
};