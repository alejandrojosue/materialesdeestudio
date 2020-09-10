var menu = "≡";
document.onselectstart = function() {return false;}
document.querySelector('.menu').innerHTML = menu;

document.querySelector('.menu').addEventListener('click', function(){
	document.querySelector('.abrirMenu').classList.toggle('menuCerrado');
	if(menu=="X"){
		menu = "≡";
	}else{
		menu = "X";
	}
		document.querySelector('.menu').innerHTML = menu;
	
});