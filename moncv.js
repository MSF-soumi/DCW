function details(e) {
    if(e=="b1"){
        document.getElementById('exp1').style.display = "block";
        document.getElementById('exp2').style.display = "none";
        document.getElementById('b1').style.display="none";
        document.getElementById('b2').style.display="block";
    }else if(e=="b2"){
        document.getElementById('exp1').style.display = "none";
        document.getElementById('exp2').style.display = "block";
        document.getElementById('b2').style.display="none";
        document.getElementById('b1').style.display="block";
    }
 }


 $(function() {
    $( document ).tooltip({
      track: true
    });
  });



  document.addEventListener('DOMContentLoaded', function() { 
    let data=[];
    document.querySelectorAll('p').forEach(function (p, j) {
        let number = p.getAttribute("id");
        if(number != null)
        {
            number = parseInt(number);
        let content="";
        for(let i=0; i<number; i++)
        {
            content+=`&nbsp;<i class="fas fa-star"></i>&nbsp;`;          
        }
        p.innerHTML=content;
        }
        data[j]=number;
    }); 
    for(let i = 0; i < data.length; i++)
   {
       if(!data[i])
           data.splice(i,1);  
   }
   var canvas = document.getElementById('myCanvas');
// Set the context
var ctx = canvas.getContext('2d');
// draws the histogram
for(var i=0; i <= data.length; i++){
 drawHistogram([i]+10,0,10,data[i]*20,"#444");
}
// function to construct the histogram 
function drawHistogram(x,y,w,h,color) {
//   Good pratice save context
  ctx.save();
  
  ctx.fillStyle=color;
  ctx.fillRect(x,y,w,h);
//   Good pratice restore context
  ctx.restore();

}
}); 