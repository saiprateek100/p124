function preload()
{
    
}

function setup(){
canvas = createCanvas(500,450);
canvas.position(565, 130);

video = createCapture(VIDEO);
video.size(550, 500);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}


function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){

} 
}