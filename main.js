img="";
status="";
function preload()      
{
img=loadImage("fundo.jpg");
}

function setup()
{

objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:detecção";
}

function modelLoaded() {
    console.log("o modelo foi carregado");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
}
else{
    console.log(results);
}
}

function draw()
{
}