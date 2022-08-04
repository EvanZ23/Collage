var speechRecognition = window.webkitSpeechRecognition;

my_agent_stt = new speechRecognition();
var img_id = "";

function area() {
    document.getElementById("control").innerHTML = "";
    my_agent_stt.start();
}

my_agent_stt.onresult = function (event) {

    console.log(event);

    document.getElementById("control").innerHTML = event.results[0][0].transcript;

    Content = event.results[0][0].transcript;

    if (Content == "take my selfie" || Content == "Take my selfie") {

        my_speak();
       
    }


};


function my_speak() {

    var my_agent_tts = window.speechSynthesis;
    text_speak = "taking your selfie in 5 seconds";
    utter_data = new SpeechSynthesisUtterance(text_speak);
    my_agent_tts.speak(utter_data);
  
    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        text_speak = "taking your another selfie in 5 seconds";
        utter_data = new SpeechSynthesisUtterance(text_speak);
        my_agent_tts.speak(utter_data);
        save_image("pic1");
   

    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        text_speak = "taking your another selfie in 5 seconds";
        utter_data = new SpeechSynthesisUtterance(text_speak);
        my_agent_tts.speak(utter_data);

     
        save_image("pic2");

    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();
        utter_data = new SpeechSynthesisUtterance(text_speak);
        my_agent_tts.speak(utter_data);

   
        save_image("pic3");

    }, 15000);



}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function take_snapshot() {

    Webcam.snap(function (picture) {
        if (img_id == "selfie1"){
            document.getElementById("pic1").src = picture;
        
        }
        if (img_id == "selfie2"){
            document.getElementById("pic2").src = picture;
        
        }
        if (img_id == "selfie3"){
            document.getElementById("pic3").src = picture;
        
        }
        
    });
}

function save_image(id) {

    my_link = document.getElementById("selfie");
    image = document.getElementById(id).src;
    my_link.href = image;
    my_link.click();


}