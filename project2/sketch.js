var capture;
var clicks = 0;



function setup(){
  createCanvas(320,240);
  capture = createCapture(VIDEO);
  capture.size(320,240);
}

function draw(){
  var r=[];
  var g=[];
  var b=[];
  
  for(var j=0;j<80;j++){
    r.push([]);
    g.push([]);
    b.push([]);
  }
  background(255);
  image(capture,0,0,320,240);
  //filter('INVERT');
  capture.loadPixels();
  
  for(var y=0; y<height; y+=3){
    for(var x=0; x<width; x+=4){
      var offset = ((y*width)+x)*8;
      switch(clicks){
        case 0:
          fill(capture.pixels[offset],0,0);
          r[y/3].push(capture.pixels[offset]);
          break;
        case 1:
          fill(0,capture.pixels[offset],0);
          g[y/3].push(capture.pixels[offset]);
          break;
        case 2:
          fill(0,0,capture.pixels[offset]);
          b[y/3].push(capture.pixels[offset]);
          break;
      }
      //stroke(255, 113, 131);
      noStroke();
      rect(x, y, 8, 8); 
    }
  }
  if(clicks == 3){
    for(var y=0; y<height; y+=1){
      for(var x=0; x<width; x+=1){
        fill(r[y][x],g[y][x],b[y][x]);
        rect(x,y,8,8);
      }
    }
  }
  
}

function mousePressed(){
  if (clicks <= 2){
    clicks += 1;
  } else {
    clicks = 0;
  }
}



