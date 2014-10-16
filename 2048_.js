
function createRandom(){
	var random=Math.floor(Math.random()*4);
	return random;
}

var arr = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

    

function rand(){
	var k=createRandom();
	var j=createRandom();
	var n=k*4+j;
	return n;
}
function isCon(){
		for(var i=0; i<16; i++){
			if(arr[i] == 0)
				return true;
		}
		return false;
	}
function randshow(){

	if( isCon()){
			do{var n=rand();}
	while(arr[n]!=0)
    arr[n]=Math.floor(Math.random()+0.1)*2+2;
	}
}
function leftrow(){
	var i1new=0;
	var i2new=0;
	var i3new=0;
	var i4new=0;
	var arry4=arr.slice(12,16);
	var arry3=arr.slice(8,12);
	var arry2=arr.slice(4,8);
  var arry1=arr.slice(0,4);

  
    var arry1new=[0,0,0,0];
    for(var i1=0;i1<4;i1++){
    	if(arry1[i1]!=0){
    	   arry1new[i1new]=arry1[i1];
    	   i1new=i1new+1;}
    }

    for(var k1=0;k1<3;k1++){
    	if(arry1new[k1]!=0&&arry1new[k1]==arry1new[k1+1]){
    		arry1new[k1]*=2;
    	    arry1new.splice(k1+1,1);
    	    arry1new.push(0);}
    }
    
    var arry2new=[0,0,0,0];
    for(var i2=0;i2<4;i2++){
    	if(arry2[i2]!=0){
    	   arry2new[i2new]=arry2[i2];
    	   i2new=i2new+1;
    	   }
    }
     for(var k2=0;k2<3;k2++){
    	if(arry2new[k2]!=0&&arry2new[k2]==arry2new[k2+1]){
    		arry2new[k2]*=2;
    	    arry2new.splice(k2+1,1);
    	    arry2new.push(0);}
    }
   
   var arry3new=[0,0,0,0];
    for(var i3=0;i3<4;i3++){
    	if(arry3[i3]!=0){
    	   arry3new[i3new]=arry3[i3];
    	   i3new++;}
    }
     for(var k3=0;k3<3;k3++){
    	if(arry3new[k3]!=0&&arry3new[k3]==arry3new[k3+1]){
    		arry3new[k3]*=2;
    	    arry3new.splice(k3+1,1);
    	    arry3new.push(0);}
    }

    var arry4new=[0,0,0,0];
    for(var i4=0;i4<4;i4++){
    	if(arry4[i4]!=0){
    	   arry4new[i4new]=arry4[i4];
    	   i4new++;}
    }
     for(var k4=0;k4<3;k4++){
    	if(arry4new[k4]!=0&&arry4new[k4]==arry4new[k4+1]){
    		arry4new[k4]*=2;
    	    arry4new.splice(k4+1,1);
    	    arry4new.push(0);}
    }

    var leftarr=arry1new.concat(arry2new).concat(arry3new).concat(arry4new);
    for(var n=0;n<16;n++){
      var ran=Math.random()/100+0.1;
      $("#"+n).css("-webkit-animation","lefton "+ran+"s")
    }
    arr=leftarr;
}
function rightrow(){
	var i1new=3;
  var i2new=3;
	var i3new=3;
	var i4new=3;
	var arry4=arr.slice(12,16);
	var arry3=arr.slice(8,12);
	var arry2=arr.slice(4,8);
    var arry1=arr.slice(0,4);

    var arry1new=[0,0,0,0];
    for(var i1=3;i1>=0;i1--){
    	if(arry1[i1]!=0){
    	   arry1new[i1new]=arry1[i1];
    	   i1new=i1new-1;}
    }
    for(var k1=3;k1>0;k1--){
    	if(arry1new[k1]!=0&&arry1new[k1]==arry1new[k1-1]){
    		arry1new[k1]*=2;
    	    arry1new.splice(k1-1,1);
    	    arry1new.unshift(0);}
    }
    
    var arry2new=[0,0,0,0];
    for(var i2=3;i2>=0;i2--){
    	if(arry2[i2]!=0){
    	   arry2new[i2new]=arry2[i2];
    	   i2new=i2new-1;
    	   }
    }
     for(var k2=3;k2>0;k2--){
    	if(arry2new[k2]!=0&&arry2new[k2]==arry2new[k2-1]){
    		arry2new[k2]*=2;
    	    arry2new.splice(k2-1,1);
    	    arry2new.unshift(0);}
    }
   
   var arry3new=[0,0,0,0];
    for(var i3=3;i3>=0;i3--){
    	if(arry3[i3]!=0){
    	   arry3new[i3new]=arry3[i3];
    	   i3new--;}
    }
     for(var k3=3;k3>0;k3--){
    	if(arry3new[k3]!=0&&arry3new[k3]==arry3new[k3-1]){
    		arry3new[k3]*=2;
    	    arry3new.splice(k3-1,1);
    	    arry3new.unshift(0);}
    }

    var arry4new=[0,0,0,0];
    for(var i4=3;i4>=0;i4--){
    	if(arry4[i4]!=0){
    	   arry4new[i4new]=arry4[i4];
    	   i4new--;}
    }
     for(var k4=3;k4>0;k4--){
    	if(arry4new[k4-1]!=0&&arry4new[k4]==arry4new[k4-1]){
    		arry4new[k4]*=2;
    	    arry4new.splice(k4-1,1);
    	    arry4new.unshift(0);}
    }

    var leftarr=arry1new.concat(arry2new).concat(arry3new).concat(arry4new);
   for(var n=0;n<16;n++){
      var ran=Math.random()/100+0.1;
      $("#"+n).css("-webkit-animation","righton "+ran+"s")
    }
    arr=leftarr;

}

function uprow(){
    var i1new=0;
	var i2new=0;
	var i3new=0;
	var i4new=0;
	var arry4=[arr[3],arr[7],arr[11],arr[15]];
	var arry3=[arr[2],arr[6],arr[10],arr[14]];
	var arry2=[arr[1],arr[5],arr[9],arr[13]];
    var arry1=[arr[0],arr[4],arr[8],arr[12]];

    
    var arry1new=[0,0,0,0];
    for(var i1=0;i1<4;i1++){
    	if(arry1[i1]!=0){
    	   arry1new[i1new]=arry1[i1];
    	   i1new=i1new+1;}
    }
    for(var k1=0;k1<3;k1++){
    	if(arry1new[k1]!=0&&arry1new[k1]==arry1new[k1+1]){
    		arry1new[k1]*=2;
    	    arry1new.splice(k1+1,1);
    	    arry1new.push(0);}
    }
    
    var arry2new=[0,0,0,0];
    for(var i2=0;i2<4;i2++){
    	if(arry2[i2]!=0){
    	   arry2new[i2new]=arry2[i2];
    	   i2new=i2new+1;
    	   }
    }
     for(var k2=0;k2<3;k2++){
    	if(arry2new[k2]!=0&&arry2new[k2]==arry2new[k2+1]){
    		arry2new[k2]*=2;
    	    arry2new.splice(k2+1,1);
    	    arry2new.push(0);}
    }
   
   var arry3new=[0,0,0,0];
    for(var i3=0;i3<4;i3++){
    	if(arry3[i3]!=0){
    	   arry3new[i3new]=arry3[i3];
    	   i3new++;}
    }
     for(var k3=0;k3<3;k3++){
    	if(arry3new[k3]!=0&&arry3new[k3]==arry3new[k3+1]){
    		arry3new[k3]*=2;
    	    arry3new.splice(k3+1,1);
    	    arry3new.push(0);}
    }
    var arry4new=[0,0,0,0];
    for(var i4=0;i4<4;i4++){
    	if(arry4[i4]!=0){
    	   arry4new[i4new]=arry4[i4];
    	   i4new++;}
    }
     for(var k4=0;k4<3;k4++){
    	if(arry4new[k4]!=0&&arry4new[k4]==arry4new[k4+1]){
    		arry4new[k4]*=2;
    	    arry4new.splice(k4+1,1);
    	    arry4new.push(0);}
    }
    
    var leftarr=[arry1new[0],arry2new[0],arry3new[0],arry4new[0],arry1new[1],arry2new[1],arry3new[1],arry4new[1],arry1new[2],arry2new[2],arry3new[2],arry4new[2],arry1new[3],arry2new[3],arry3new[3],arry4new[3]]
   for(var n=0;n<16;n++){
      var ran=Math.random()/100+0.1;
      $("#"+n).css("-webkit-animation","upon "+ran+"s")
    }
    arr=leftarr;

}
function downrow(){
  var i1new=0;
	var i2new=0;
	var i3new=0;
	var i4new=0;
	var arry4=[arr[15],arr[11],arr[7],arr[3]];
	var arry3=[arr[14],arr[10],arr[6],arr[2]];
	var arry2=[arr[13],arr[9],arr[5],arr[1]];
    var arry1=[arr[12],arr[8],arr[4],arr[0]];

    
    var arry1new=[0,0,0,0];
    for(var i1=0;i1<4;i1++){
    	if(arry1[i1]!=0){
    	   arry1new[i1new]=arry1[i1];
    	   i1new=i1new+1;}
    }
    for(var k1=0;k1<3;k1++){
    	if(arry1new[k1]!=0&&arry1new[k1]==arry1new[k1+1]){
    		arry1new[k1]*=2;
    	    arry1new.splice(k1+1,1);
    	    arry1new.push(0);}
    }
    
    var arry2new=[0,0,0,0];
    for(var i2=0;i2<4;i2++){
    	if(arry2[i2]!=0){
    	   arry2new[i2new]=arry2[i2];
    	   i2new=i2new+1;
    	   }
    }
     for(var k2=0;k2<3;k2++){
    	if(arry2new[k2]!=0&&arry2new[k2]==arry2new[k2+1]){
    		arry2new[k2]*=2;
    	    arry2new.splice(k2+1,1);
    	    arry2new.push(0);}
    }
   
   var arry3new=[0,0,0,0];
    for(var i3=0;i3<4;i3++){
    	if(arry3[i3]!=0){
    	   arry3new[i3new]=arry3[i3];
    	   i3new++;}
    }
     for(var k3=0;k3<3;k3++){
    	if(arry3new[k3]!=0&&arry3new[k3]==arry3new[k3+1]){
    		arry3new[k3]*=2;
    	    arry3new.splice(k3+1,1);
    	    arry3new.push(0);}
    }

    var arry4new=[0,0,0,0];
    for(var i4=0;i4<4;i4++){
    	if(arry4[i4]!=0){
    	   arry4new[i4new]=arry4[i4];
    	   i4new++;}
    }
     for(var k4=0;k4<3;k4++){
    	if(arry4new[k4]!=0&&arry4new[k4]==arry4new[k4+1]){
    		arry4new[k4]*=2;
    	    arry4new.splice(k4+1,1);
    	    arry4new.push(0);}
    }

    var leftarr=[arry1new[3],arry2new[3],arry3new[3],arry4new[3],arry1new[2],arry2new[2],arry3new[2],arry4new[2],arry1new[1],arry2new[1],arry3new[1],arry4new[1],arry1new[0],arry2new[0],arry3new[0],arry4new[0]];
    for(var n=0;n<16;n++){
      var ran=Math.random()/100+0.1;
      $("#"+n).css("-webkit-animation","downon "+ran+"s")
    }
    arr=leftarr;
}
  var SubmitOrHidden = function(evt){
       evt = window.event || evt;
      if(evt.keyCode==37){
            leftrow();   
           randshow();
            change();
            
       }
       if(evt.keyCode==39){
            rightrow();          
            randshow();
            change();
       }
        if(evt.keyCode==38){
            uprow();  
           randshow();
            change();
       }
        if(evt.keyCode==40){
           downrow() ;
            	randshow();
            change();
       }
       if(evt.keyCode==27){
            arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
             change();
       }

  }
  window.document.onkeydown=SubmitOrHidden;//当有键按下时执行函数
  function change(){
  	var m=0;
    var n=0;
  	for(m;m<16;m++){
  		if(arr[m]==2048){
  			alert("you win")
  		}
  	}
    for(n;n<16;n++){
      $("#"+n).attr("class","shu"+arr[n])
    }
    if(lose()){
    	alert("you lose plese ESC")
    }
    
  }
function lose(){
	var n=0;
  	var x=0,y=0;
  
  for(n;n<16;n++){
    if(arr[n]==0){
    	return false;
    }
  }
  for(y=0;y<3;y++){
  	for(x=0;x<3;x++){

  		if(arr[4*y+x]==arr[4*y+x+1]	||arr[4*y+x]==arr[4*(y+1)+x]||arr[4*(y+1)+x]==arr[4*(y+1)+x+1]||arr[4*y+x+1]==arr[4*(y+1)+x+1]){ 		
  		console.log(x,y)	
  			return false
  				
  		}
  	}
  }
  // console.log(arr[4*y+x],4*y+x+1,4*(y+1)+x,4*(y+1)+x+1,y,x)
return true;
}