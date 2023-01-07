
function setup()
{
video = createCapture(VIDEO);
video.size(400,500);

canvas= createCanvas(600,600);
canvas.position(540,300);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('The model has been loaded or has it?');
}

function draw(){
background ('#aa6f73');
fill('#cf6f78');
stroke('##782430');
Word(nose_x,nose_y,difference);
}

function gotPoses(results)
{
    if (results.length >0)
{
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x = " + nose_x + "nose_y = " + nose_y );
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log("leftWristX = " +  leftWristX + "rightWristX = " + rightWristX + 'difference' + difference);
}

}
