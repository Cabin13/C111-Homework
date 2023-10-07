var gesture1= ""
var gesture2= ""

Webcam.set({
    width:350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

Webcam.attach("#camera")

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='snapshot' src='" + data_uri + "'>"
    })
}

console.log(ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8PIMQSSEa/model.json", modelLoaded)

function modelLoaded() {
    console.log("model is loaded")
}

function speak() {
    synth= window.SpeechSynthesis
    speakData= "The first prediction is " + prediction1 + ". The second prediction is " + prediction2 + "."
    utterThis= new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
}
