noseX=0;
noseY=0;


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet=ml5.poseNet(camera,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
    }
}
function take_snapshot(){
save('myfilterimg.png');
}
function draw(){
    image(video,0,0,300,300);
}