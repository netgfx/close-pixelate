$(document).ready(function(){
  
  $("#video").get(0).play();
  
  var video = document.getElementById('video');
  var canvas = document.getElementById('c');
  var context = canvas.getContext('2d');
  
  
   $("#c").width($('document').width());
   $("#c").height($('document').height());
  
  
    var cw = Math.floor(canvas.clientWidth );
    var ch = Math.floor(canvas.clientHeight );
    canvas.width = cw;
    canvas.height = ch;

	 canv = canvas;
     c = context;
     v = video;
     w = cw;
     h = ch;
     
     draw(v,context,cw,ch);
  
});

var canv;
var c;
var v;
var w;
var h;

function draw() {
	
    if(v.paused || v.ended){ 
    	return false;
   	}
    
    var myPixelation = new ClosePixelation( v, [
  		{ resolution : 8,shape:'circle', video:true, videoW:w, videoH:h }
  ]);

    c.putImageData(myPixelation,0,0);
    window.requestAnimationFrame(draw);
    //setTimeout(draw,20);  // alternative
}

