
			
// ----Faz a caixa seguir o mouse----
			
	// let box = document.getElementById('box');
	// window.onmousemove = function(e){
	// 	box.style.transform = "rotateX(-30deg) rotateY(" + e.clientX +"deg)"
	// }
			
//Box Girando com Scroll 
	let Contracapa = document.getElementById("Contracapa");
	let capa = document.getElementById("capa");
	let ladoD = document.getElementById("ladoD");
	let ladoE = document.getElementById("ladoE");
	let topo = document.getElementById("top");
	
	window.addEventListener('scroll', function(){
    var value = window.scrollY;
	    
	topo.style.transform = 'rotateX(90deg) rotateZ(' + value* 0.5 +'deg) translate3d(0,0,150px)'
	capa.style.transform = 'rotateX(' + -value * 0 +'deg) rotateY('+ -value * 0.50 +'deg) translateZ(150px)'
	Contracapa.style.transform = 'rotateX(' + value * 0 +'deg) rotateY('+ value * -0.50 +'deg) translateZ(-150px)'
	ladoD.style.transform = '  rotateY('+(value*-0.5+(-90))+'deg) translateZ(150px)'
	ladoE.style.transform = ' rotateY('+(value*-0.5+(-90))+'deg)  translateZ(-150px)'
    })