eyesX = 0;
eyesY = 0;


function preload(){
    glasses = loadImage('https://i.postimg.cc/DwCg1rG2/glasses.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized.')
}

function draw(){
    image(video, 0, 0, 300, 300);

    image(glasses, eyesX - 70, eyesY - 20, 100, 50);
}

function save(){
    save('FilterImage.png')
}
function gotPosses(results){
    if(results.length > 0){
        console.log(results);
        eyesX = results[0].pose.leftEye.x;
        eyesY = results[0].pose.leftEye.y;
        console.log("eyes x = " + eyesX);
        console.log("eyes y = " + eyesY);
    }
}