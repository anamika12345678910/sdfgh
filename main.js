function preload(){

}
 function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
 }
 function draw() {
    
 }
 function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function modelLoaded() {
   console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}



function take_snapshot(){
    save('ANKTI.PNG')
}