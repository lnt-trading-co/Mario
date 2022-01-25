noseX= 0;
noseY= 0;

function preload() {
	world_start = loadSound("world_start.wav");
	m_c= loadSound("coin.wav")
	m_j= loadSound("jump.wav")
	m_k= loadSound("kick.wav")
	m_gO= loadSound("gameover.wav")
	m_d= loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400)
	video.parent('gameConsole')

	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on('pose', gotPoses)
}

function modelLoaded() {
	console.log("Model Loaded")
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
	}
}

function draw() {
	game()
}