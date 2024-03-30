var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox"); 


function start()
{
    // Limpa o conteúdo da caixa de texto com o id "Textbox".
    Textbox.innerHTML = "";
    // Inicia o reconhecimento de fala
    recognition.start();
}
// reconhecimento de fala 
recognition.onresult = function(event)
{
  console.log(event); 
  var Content = event.results[0][0].transcript;
  Textbox.innerHTML = Content;
  console.log(Content);
  if(Content =="foto")
  {
    console.log("tirando foto --- ");
    speak();
  }
}


// responsável por falar uma mensagem para o usuário
function speak()
{
  var synth = window.speechSynthesis;
  speak_data = "fica na pose agora antes que o skar king te escravize";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function()
  { 
    take_selfie(); 
    save();
  }, 5000);
}

// Obtém o elemento HTML com o id "camera" e armazena-o na variável "camera".
camera = document.getElementById("camera");


// Configura as propriedades da webcam
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

// responsável por capturar

function take_selfie()
{
  Webcam.snap(function(data_uri) 
  {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  });
}

// responsável por salvar a imagem capturada.
function save(){
    link= document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}