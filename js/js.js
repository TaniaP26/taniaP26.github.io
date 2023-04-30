
for (let i = 1; i<9; i++){
	var line = document.querySelectorAll('.line'+String(i));
	for (let j = 1; j<9; j++){
		//line[0].innerHTML += '<div class="cel"></div>';	
		line[1].innerHTML += '<div class="cel"></div>';	
		line[2].innerHTML += '<div class="cel"></div>';	
		
	}
}

for (let i = 8; i > 0; i = i-2) {
    line = document.querySelectorAll('.line'+String(i));
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';


}


for (let i = 7; i > 0; i = i-2) {
    line = document.querySelectorAll('.line'+String(i));
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
	line[0].innerHTML += '<div class="cel white"></div>';
	line[0].innerHTML += '<div class="cel black"></div>';
    line[0].innerHTML += '<div class="cel white"></div>';
	

}


var h_win = document.querySelector('.chess_board').offsetWidth;
document.querySelectorAll('.chess_board')[0].style.height = h_win + 'px';
document.querySelectorAll('.chess_board')[1].style.height = h_win + 'px';
document.querySelectorAll('.chess_board')[2].style.height = h_win + 'px';
 
let moveHold = 0;

var x = document.querySelectorAll('.line2');
for (let i=0; i<8; i++){
	x[2].childNodes[i].innerHTML += '<div class="pawnW"></div>';

}
x = document.querySelectorAll('.line7');
	for (let i=0; i<8; i++){
		x[2].childNodes[i].innerHTML += '<div class="pawnB"></div>';
	}

document.querySelectorAll('.line1')[2].childNodes[1].innerHTML += '<div class="knightW"></div>';
document.querySelectorAll('.line1')[2].childNodes[6].innerHTML += '<div class="knightW"></div>';

document.querySelectorAll('.line1')[2].childNodes[2].innerHTML += '<div class="bishopW"></div>';
document.querySelectorAll('.line1')[2].childNodes[5].innerHTML += '<div class="bishopW"></div>';

document.querySelectorAll('.line1')[2].childNodes[0].innerHTML += '<div class="rookW"></div>';
document.querySelectorAll('.line1')[2].childNodes[7].innerHTML += '<div class="rookW"></div>';

document.querySelectorAll('.line1')[2].childNodes[4].innerHTML += '<div class="kingW"></div>';
document.querySelectorAll('.line1')[2].childNodes[3].innerHTML += '<div class="quinW"></div>';

document.querySelectorAll('.line8')[2].childNodes[0].innerHTML += '<div class="rookB"></div>';
document.querySelectorAll('.line8')[2].childNodes[7].innerHTML += '<div class="rookB"></div>';

document.querySelectorAll('.line8')[2].childNodes[1].innerHTML += '<div class="knightB"></div>';
document.querySelectorAll('.line8')[2].childNodes[6].innerHTML += '<div class="knightB"></div>';

document.querySelectorAll('.line8')[2].childNodes[2].innerHTML += '<div class="bishopB"></div>';
document.querySelectorAll('.line8')[2].childNodes[5].innerHTML += '<div class="bishopB"></div>';

document.querySelectorAll('.line8')[2].childNodes[4].innerHTML += '<div class="kingB"></div>';
document.querySelectorAll('.line8')[2].childNodes[3].innerHTML += '<div class="quinB"></div>';




//move1
movePiec(2, 4,  4, 4, 500) ;
moveHold=moveHold+1000;

//move1
setTimeout(function(){
	movePiec(7, 2, 5, 2,  500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move2
setTimeout(function(){
	movePiec(1, 1, 3, 2,  500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move2
setTimeout(function(){
	movePiec(7, 6, 6, 6,  500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move3
setTimeout(function(){
	movePiec(2, 3, 3, 3,  500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move3
setTimeout(function(){
	awayPiec(8,6 )
	movePiec(8, 5, 7, 6, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move4
setTimeout(function(){
	movePiec(1, 2, 3, 4, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move4
setTimeout(function(){
	movePiec(7, 1, 6, 1, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

  
//move5
setTimeout(function(){
	movePiec(2, 6, 3, 6,  500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move5
setTimeout(function(){
	movePiec(7, 4, 6, 4, 500) ;
}, moveHold) 
moveHold=moveHold+1000;


//move6
setTimeout(function(){
	movePiec(1, 5, 2, 6, 500 ) ;
}, moveHold) 
  moveHold=moveHold+1000;


//move6
setTimeout(function(){
	movePiec(8, 2, 7, 1, 500 ) ;
}, moveHold) 
  moveHold=moveHold+1000;

//move7
setTimeout(function(){
	movePiec(1, 6, 3, 5, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move7
setTimeout(function(){
	backPiec(8, 6);
	movePiec(8, 6, 7, 4, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move8
setTimeout(function(){
	movePiec(1, 4, 1, 6, 500 ) ;
	movePiec(1, 7, 1, 5, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move8
setTimeout(function(){
	movePiec(8, 4, 8, 6, 500 ) ;
	movePiec(8, 7, 8, 5, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move9
setTimeout(function(){
	movePiec(3, 5, 5, 6, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move9
setTimeout(function(){
	movePiec(7, 3, 5, 3, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move10
 setTimeout(function(){
	movePiec(4, 4, 5, 3, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move10
  setTimeout(function(){
	movePiec(7, 4, 5, 3, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move11
  setTimeout(function(){
	movePiec(3, 2, 5, 3, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move11
  setTimeout(function(){
	movePiec(7, 1, 5, 3, 500 ) ;
}, moveHold) 
moveHold=moveHold+1000;

//move12
setTimeout(function(){
	movePiec(2, 6, 5, 3, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move12
setTimeout(function(){
	movePiec(8, 3, 5, 3, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move13
setTimeout(function(){
	movePiec(1, 3, 4, 6, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move13
setTimeout(function(){
	movePiec(7, 6, 2, 1, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move14
setTimeout(function(){
	movePiec(4, 6, 3, 7, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move14
setTimeout(function(){
	movePiec(7, 7, 5, 7, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move15
setTimeout(function(){
	movePiec(3, 6, 4, 6, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move15
setTimeout(function(){
	movePiec(2, 1, 1, 0, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move16
setTimeout(function(){
	movePiec(4, 6, 5, 7, 500 ) ;
  }, moveHold) 
moveHold=moveHold+5000;

//move16
setTimeout(function(){
	movePiec(7, 5, 6, 5, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move17
setTimeout(function(){
	movePiec(5, 7, 6, 6, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move17
setTimeout(function(){
	movePiec(8, 5, 7, 5, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move18
setTimeout(function(){
	movePiec(5, 6, 7, 5, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//move18
setTimeout(function(){
	movePiec(1, 0, 3, 2, 500 ) ;
  }, moveHold) 
moveHold=moveHold+1000;

//game over
setTimeout(function(){
	movePiec(3, 7, 8, 7, 500 ) ;
  }, moveHold) 

setTimeout(function(){
	document.querySelectorAll('.line8')[2].childNodes[6].childNodes[0].style.opacity=1;
  }, moveHold+500) 


function movePiec(line1, childnode1, line2, childnode2, timeDurat ){

	let movX = 0;		
	let movY = 0;
	let movScale = 1;
	
	let sqrPiec1 = document.querySelectorAll('.line' + String(line1))[2].childNodes[String(childnode1)];
	let sqrPiec2 = document.querySelectorAll('.line' + String(line2))[2].childNodes[String(childnode2)];

	let NamePiec1 = sqrPiec1.childNodes[0].className;
	
	
	if (!document.querySelectorAll('.line' + String(line2))[2].childNodes[String(childnode2)].childNodes[0]){
		sqrPiec2.innerHTML += '<div class="' + NamePiec1 + '"></div>';
		sqrPiec2.childNodes[0].style.visibility = 'hidden';
		} else {
			console.log("")
			setTimeout(function(){
				sqrPiec2.innerHTML = '';		
			}, timeDurat*0.7);

			setTimeout(function(){				
				sqrPiec2.innerHTML += '<div class="' + NamePiec1 + '"></div>';	
			}, timeDurat*0.9);
			
		
	}
	
	movX = sqrPiec2.childNodes[0].getBoundingClientRect().x - sqrPiec1.childNodes[0].getBoundingClientRect().x;
	movY = sqrPiec2.childNodes[0].getBoundingClientRect().y - sqrPiec1.childNodes[0].getBoundingClientRect().y;
	movScale = sqrPiec2.getBoundingClientRect().width/sqrPiec1.getBoundingClientRect().width;
	
	
	if (NamePiec = 'pawnB'){
		shift =  sqrPiec2.childNodes[0].getBoundingClientRect().height * 0.35	
	} else if ( NamePiec='pawnW'){
			   shift =  sqrPiec2.childNodes[0].getBoundingClientRect().height * 0.35
			   } else {
			   		 shift =  sqrPiec2.childNodes[0].getBoundingClientRect().height * 0.4
			   }
		movY = movY - shift;
	
	  sqrPiec1.childNodes[0].animate([
	   // keyframes
 		{transform:  'rotateX(' + -45 + 'deg) translatex(' + 0 + 'px) translatey(' + -shift + 'px) '},
		
     	{transform:  'rotateX(' + -45 + 'deg) translatex(' + movX + 'px) translatey(' + movY  + 'px) scale(' + movScale + ')'}
      ], {
      // timing options
      duration: timeDurat,
      //easing: 'linear',
	  easing: 'cubic-bezier(0.42, 0, 0, 1)',
      //iterations: Infinity
   })
	
	setTimeout(function(){
	
				sqrPiec2.childNodes[0].style.visibility = 'visible'	   
	
	}, timeDurat);
	
	setTimeout(function(){
		sqrPiec1.innerHTML = '';		
	}, timeDurat);

};


function  awayPiec(line, childnode){
	
	NamePiec=document.querySelectorAll('.line' + String(line))[2].childNodes[6].childNodes[0].className;
	
	document.querySelectorAll('.line' + String(line) )[2].childNodes[6].innerHTML = '';
	document.querySelectorAll('.line' + String(line) )[1].childNodes[6].innerHTML += '<div class="' + NamePiec + '"></div>';						  

}

function  backPiec(line, childnode){

		
	NamePiec=document.querySelectorAll('.line' + String(line))[1].childNodes[6].childNodes[0].className;
	
	document.querySelectorAll('.line' + String(line) )[1].childNodes[6].innerHTML = '';
	document.querySelectorAll('.line' + String(line) )[2].childNodes[6].innerHTML += '<div class="' + NamePiec + '"></div>';	
	
}



