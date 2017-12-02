var guage_count =12;
var sel_id;
window.onload = function (){

for(i=0;i<guage_count;i++){
$(".display_con").append('<div class="cantant_o"><canvas id = "back_loop_'+i+'" class="canvas_back" width = "240" height = "240" ></canvas><canvas id = "pro_loop_'+i+'"  class="canvas"  data-toggle="modal" data-target=".bs-example-modal-lg-new" idval="'+i+'" width = "240" height = "240" ></canvas></div>');  
}
  
var image = new Image();
image.src = "data:image/png;base64,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";

  
image.onload = function() {
for(i=0;i<guage_count;i++){
  var canvas_back = document.getElementById("back_loop_"+i+"");
  var ctx_back = canvas_back.getContext("2d");
      ctx_back.fillStyle = "#292D5D";
      //ctx_back.fillStyle = "#e05dd1";
      ctx_back.beginPath();
      ctx_back.shadowColor = "#292D5D";
      //ctx_back.shadowColor = "#e05dd1";
      ctx_back.shadowBlur = 15;
      ctx_back.arc(236/2, 240/2, 112, 0, Math.PI*2, true); 
      ctx_back.closePath();
      ctx_back.fill();  
      ctx_back.drawImage(image, 0, 0);
  }
}; 
  
  var width = 240;
  var height = 240;
  var degrees = [];
  for(i=0;i<guage_count;i++){
    degrees[i]=0;
  }
  var new_degrees = [];
  var difference = 0;
  
  var color = [];
  for(i=0;i<guage_count;i++){
    color[i]="#FDCE28";
  }
  var alert_set = [];
  for(i=0;i<guage_count;i++){
    alert_set[i]=80;
  }
  
  var bgcolor = "#155";
  var width_hight = 190;
  var text;
  var animation_loop,redraw_loop;
  
  function init(ctx, id) {
    ctx.clearRect(0,0,width,height);
    if(Math.floor(degrees[id]/360*100)>alert_set[id]){
      ctx.beginPath();
      ctx.globalAlpha = 0.3;
      ctx.arc(234/2, 240/2, 80, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = 'red';
      ctx.shadowColor = "red";
      ctx.shadowBlur = 85;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.globalAlpha = 1;
      
      //degrees = 360;
    var radians = degrees[id] * Math.PI / 180;
    ctx.beginPath();
    ctx.arc(236/2,240/2,62,0 - 90*Math.PI/180,
          radians - 90*Math.PI/180,false);
    ctx.strokeStyle = 'red';
    ctx.shadowBlur = 25;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'red';
    ctx.lineWidth = 6;
    var radialGradient1 =ctx.createRadialGradient(90, 90, 0, 40, 150, 140);
    radialGradient1.addColorStop(0, 'red');
    radialGradient1.addColorStop(1, color[id]);
    ctx.strokeStyle = radialGradient1;
    ctx.stroke();
    
    }
    else{
    //degrees = 360;
    var radians = degrees[id] * Math.PI / 180;
    ctx.beginPath();
    ctx.arc(236/2,240/2,62,0 - 90*Math.PI/180,
          radians - 90*Math.PI/180,false);
    ctx.strokeStyle = color[id];
    ctx.shadowBlur = 25;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = color[id];
    ctx.lineWidth = 6;
    var radialGradient1 =ctx.createRadialGradient(90, 90, 0, 40, 150, 140);
    radialGradient1.addColorStop(0, 'red');
    radialGradient1.addColorStop(1, color[id]);
    ctx.strokeStyle = radialGradient1;
    ctx.stroke();
    }
    //lets add the text
    ctx.fillStyle = "#07f3f5";
    ctx.font = "25px Neuropol_XXX";
    ctx.shadowColor = "#07f3f5";
    ctx.shadowBlur = 15;
    if(Math.floor(degrees[id]/360*100)>9)
    text = Math.floor(degrees[id]/360*100) + "%";
    else
    text = "0"+ Math.floor(degrees[id]/360*100) + "%";  
    $(".text_con").html(text)
    text_width = ctx.measureText(text).width;
    ctx.fillText(text,width/2 - text_width/2,230/2 + 15);
 }
  
  function draw() {
    //Cancel any movement animation if a new chart is requested
		if(typeof animation_loop != undefined) 
       clearInterval(animation_loop);
		//random degree from 0 to 360
    for(i=0;i<guage_count;i++){
    new_degrees[i] = Math.round(Math.random()*360);
    }
    animation_loop = setInterval(animate_to, 10);
  }
  
  function animate_to() {
     difference++;
		 if(difference == 100){
       clearInterval(animation_loop);
       difference = 0;
     } 
		
    for(i=0;i<guage_count;i++){
        var canvas = document.getElementById("pro_loop_"+i+"");
        var ctx = canvas.getContext("2d");
      
        if(degrees[i] < new_degrees[i]){
           degrees[i]++;
           init(ctx,i);
        }else if(degrees[i] > new_degrees[i]){
           degrees[i]--;
           init(ctx,i);
        }else{ }
    } 
	}
  draw();
  redraw_loop = setInterval(draw,5000);
  
$(".canvas").click(function(){
     sel_id = parseInt($(this).attr('idval'));
     $(".alert_input").val(alert_set[sel_id]);
     $(".color_value").val(color[sel_id]);
	 $('#cp2').colorpicker({color: color[sel_id]});
})

$(".Save_button").click(function(){
     alert_set[sel_id] = $(".alert_input").val();
     color[sel_id] = $(".color_value").val();
})



$('#cp2').colorpicker({color: '#ffaa00'});

$('.alert_input').change(function(){
alert_value = $('.alert_input').val();
})
}













