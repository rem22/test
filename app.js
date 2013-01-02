function toImg(){
        var svg = $("#svg_drawing").html();
		svg=svgfix(svg);		
        var canvas = $("#canvas")[0];
        canvg(canvas, svg,{
            renderCallback : function(){
                var imgData = canvas.toDataURL('image/png');
                var img = new Image();
                img.src = imgData;
				img.src.replace('image/png', 'image/octet-stream');				
				window.open(img.src,'Download');
                }
            });           
     }
	
	function nr2c(nr){
        var colors=['#FF0','#FFF','#A0C','#BFC','#FAF','#D51','#B3D','#DDD','#5C1','#EB8']
        var x=colors[nr];
        return x;
    }

    function encode(input) {
    var encoding = [];
    input.match(/(.)\1*/g).forEach(function(substr){ encoding.push([substr.length], substr[0])});
    return encoding;
    }
     function init(paper) {
               var arr = [];
               var circles=[];
               var x=10;
               var rx=document.getElementById('rx').value;
               arr=rx.split("");
               for(var i= 0;i<arr.length;i++){
                   x+=20;
                   circles[i]=paper.circle(x,10,10);
                   circles[i].attr("fill",nr2c(arr[i]));
                   circles[i].attr({ title:arr[i]});
               }
               return paper;
           }
		    function rle(paper) {
			var str=encode(document.getElementById('rx').value);
            var circles=[];
            var texts=[];
            var x=10;
                for(var i= 0;i<str.length;i++){
                    x+=20;
                    if((i==0)||(i%2)==0){
                        texts[i]=paper.text(x,40,str[i]);
                    }else{
                    circles[i]=paper.circle(x,40,10);
                    circles[i].attr("fill",nr2c(str[i]));
                    circles[i].attr({ title:str[i]});
                    }
                }
            }