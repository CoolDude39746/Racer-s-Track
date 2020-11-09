Canvas=getElementById("myCanvas");
ctx=Canvas.getContext("2d");

RoverWidth=100;
RoverHeight=90;
RoverX=10;
RoverY=10;

BackgroundImage="mars.jpg";
RoverImage="Yeah This Is Better.jpg";

function Add() {
    BackgroundImageTag=new Image();
    BackgroundImageTag.onload=Tag_UploadBackground;
    BackgroundImageTag.src=BackgroundImage;

    RoverImageTag=new Image();
    RoverImageTag.onload=Tag_UploadRover;
    RoverImageTag.src=RoverImage;
}

function Tag_UploadBackground() {
    ctx.drawImage(BackgroundImageTag,0,0,canvas.width,canvas.height);
}

function Tag_UploadRover() {
    ctx.drawImage(RoverImageTag,RoverX,RoverY,RoverWidth,RoverHeight);
}

window.addEventListener("keydown",DownPress);

function DownPress(e) {
    KeyPressed=e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed=='38') {
        Up();
        console.log("Up");
    }
    if(KeyPressed=='40') {
        Down();
        console.log("Down");
    }
    if(KeyPressed=='37') {
        Left();
        console.log("Left");
    }
    if(KeyPressed=='39') {
        Right();
        console.log("Right");
    }
}

function Up() {
    if(RoverY >= 0) {
        RoverY=RoverY-10;
        Tag_UploadBackground();
        Tag_UploadRover();
    }
}

function Down() {
    if(RoverY <= 500) {
        RoverY=RoverY+10;
        Tag_UploadBackground();
        Tag_UploadRover();
    }
}

function Left() {
    if(RoverX >= 0) {
        RoverX=RoverX-10;
        Tag_UploadBackground();
        Tag_UploadRover();
    }
}

function Right() {
    if(RoverX <= 700) {
        RoverX=RoverX+10;
        Tag_UploadBackground();
        Tag_UploadRover();
    }
}