canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

images_array = ["NASA Image 1.jpg","NASA Image 2.jpg","NASA Image 3.jpg", "NASA Image 4.jpg"];
random_number = Math.floor(Math.random()*4)

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = images_array[random_number];
console.log("background_image = " + background_image);

rover_image = "rover.png";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = upload_background;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = upload_rover;
    rover_imageTag.src = rover_image;
}

function upload_background(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == "38"){
    console.log("up");
    up();
    }

    if(keyPressed == "40"){
        console.log("down");
        down();
        }

        if(keyPressed == "37"){
            console.log("left");
            left();
            }

            if(keyPressed == "39"){
                console.log("right");
                right();
                }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, x = " + rover_x + "and y = " + rover_y);
        upload_background();
        upload_rover()
    }
}

    function down(){
        if(rover_y <= 500){
            rover_y = rover_y + 10;
            console.log("when up arrow is pressed, x = " + rover_x + "and y = " + rover_y);
            upload_background();
            upload_rover()
        }
    }

        function left(){
            if(rover_x >= 0){
                rover_x = rover_x - 10;
                console.log("when up arrow is pressed, x = " + rover_x + "and y = " + rover_y);
                upload_background();
                upload_rover()
            }
        }

        function right(){
            if(rover_x <= 700){
                rover_x = rover_x + 10;
                console.log("when up arrow is pressed, x = " + rover_x + "and y = " + rover_y);
                upload_background();
                upload_rover()
            }
        }
