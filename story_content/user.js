function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RqsWR0px1q":
        Script1();
        break;
      case "6NAOBVgH9pJ":
        Script2();
        break;
      case "5yQlUx9hSnb":
        Script3();
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

function Script3()
{
  var player = GetPlayer();
// Ambil data dari variabel Storyline
var Nama = player.GetVar("nama");
var Nilai = player.GetVar("nilaikuis"); // Nilai persentase

// *** PASTE URL WEB APP ANDA DI SINI ***
var URL_ENDPOINT = "https://script.google.com/macros/s/AKfycbyipbZmtzbg7bVPldYnXoCOz2Z94XH3poaJuzmq00KJ3j45shYW8PfIGXJWABzInxSHyQ/exec"; 

// Bungkus data ke format JSON (kunci 'nama' dan 'nilai' harus sama dengan kode Apps Script)
var data = {
    nama: Nama,
    nilai: Nilai
};

// Kirim data ke Google Apps Script (Fetch API)
fetch(URL_ENDPOINT, {
    method: 'POST',
    // Penting: Apps Script lebih mudah memproses data jika Content-Type-nya adalah text/plain
    headers: {
        'Content-Type': 'text/plain', 
    },
    body: JSON.stringify(data), // Objek data diubah menjadi string JSON
})
.then(response => {
    // Opsional: Lakukan sesuatu setelah berhasil terkirim
})
.catch((error) => {
    // Opsional: Lakukan sesuatu jika terjadi error
});
}

