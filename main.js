function setup(){
video= createCapture(VIDEO);
video.size(500,550);

canvas = createCanvas(500,550);
canvas.position(560,150);

poseNet= ml5.poseNet(video, modelLoaded);
pose.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized");
    
}

function gotPoses(results){


if (results.length >0){
console.log(results);

}
}