function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dDFvfTd7NT":
        Script1();
        break;
      case "6bWHcLR4asT":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById("bgSong");

audio.src="1.mp3";

audio.load();

audio.play();

audio.volume = 0.4;
}

function Script2()
{
  
setTimeout(function() {
  
  var allInputs = document.querySelectorAll('input[type="text"]');
  
  if (allInputs.length > 0) {
    for (var i = 0; i < allInputs.length; i++) {
      allInputs[i].setAttribute("maxlength", "10");
    }
  }
  
}, 300); 
}

