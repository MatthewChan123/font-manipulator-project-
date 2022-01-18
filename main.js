leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Posenet is inatilized")
}
function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        no_decimals = difference.math.floor();
    }
}
function draw() {
    background("#42b3f5");
    textSize(no_decimals);
    fill(5);
    text("So put your name in the first parameter And in x coordinate put any value like ,10,20,30,40,50, and so on And in y coordinate put any value like ,10,100,200,300, and so on");
}
