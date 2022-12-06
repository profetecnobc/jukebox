var musica = new Array(); 
musica[0] = ["Love in the Future","John Legend","All of Me","portada_all_of_me.jpg","all_of_me.mp3"];
musica[1] = ["Amuza","Micky Nuñez","Escriurem","portada_escriurem.jpg","escriurem.mp4"];
musica[2] = ["Una Lluna a l'Aigua","Txarango","Una Lluna a l'Aigua","portada_lluna_aigua.jpg","lluna_aigua.m4a"] ;
var posi = 0; 
var per = 0; 
var color_logo = "#00f424"; //0,244,36
// color #3CCDBA,#96B979,#B9B750,#934F10,#00f424 
// Carreguem la capa actiu amb la primera cançó la numero 0 
play(0); 
// Assigna la informació a cada item LI de la capa playlst 
for(x=0; x< musica.length;x++) {
  document.getElementById("img"+x).src = "img/" + musica[x][3]; 
  document.getElementById("tit"+x).innerHTML = musica[x][2]; 
}
//Genera una llista de elements LI per assignar l'esdeveniment mouseout quan el cursor surti de l'item LI 
var canso = Array.from(document.getElementsByTagName("li"))
canso.forEach(x => x.addEventListener("mouseout", sortir));
function play(numero) {
  document.getElementById("musi" + posi).classList.remove('active');
  posi = numero; 
  document.getElementById("portada").src = "img/" + musica[numero][3]; 
  document.getElementById("audio").src = "audio/" + musica[numero][4]; 
  document.getElementById("audio").play(); 
  document.getElementById("musi" + numero).classList.add('active'); 
}
function sobre(numero) {
  document.getElementById("sob"+per).innerHTML = "";  
  document.getElementById("sob"+numero).innerHTML = musica[numero][1]; 
  per = numero; 
}
function sortir(event) {
  var botoPulsat = event.target //detectem quin dels 16 botons s'ha clicat 
  var index = canso.indexOf(botoPulsat) //Obtenim posició del botó clicat
  document.getElementById("sob"+index).innerHTML = "";  
}
