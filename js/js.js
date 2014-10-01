$(document).on("ready",function(){
	var valor=0;
	var indicador=1;
	var detalles=Array("",
		{contenidoImg:"icn_formula.png",presentacionImg:"icn_contenido.png",empaque:"producto_amibas.png",copy:'copy-amiba.png',postic:'<P style="padding-top:15px; text-align:center;"><span><b>Desparasita <br />cómodamente:</b>	</span></p><hr /><p style="text-align:center;">Elimina parásitos,<br />amibas y lombrices<br />en <span><b>una sola toma.</b></span></p>',imagen:'amiba-tachuela-rojo.png',contenido:'<p style="text-align:center;">Cada tableta contiene: <hr>Mebendazol........... 300mg.<br/>Quinfamida.............150mg.</p>',presentacion:'<p style="text-align:center;">Cada caja contiene:<hr>2 tabletas.</p>'},
		{contenidoImg:"vasito.png",presentacionImg:"frasco.png",empaque:"producto_platano.png",copy:'copy-platano.png',postic:'<P style="padding-top:15px; text-align:center;"><span><b>¡Protege a tus hijos!</b></span></p><hr /><p style="text-align:center;">El mismo poder <br>desparasitante en una<br> sola toma con un <br>delicioso sabor plátano.</p>',imagen:'platano-tachuela-rojo.png',contenido:'<p style="text-align:center;">Cada frasco contiene: <hr>Mebendazol........... 60mg.<br/>Quinfamida.............20mg.</p>',presentacion:'<p style="text-align:center;">Caja con un frasco de: <hr>10 ml.</p>'},
		{contenidoImg:"vasito.png",presentacionImg:"frasco.png",empaque:"producto_cereza.png",copy:'copy-cereza.png',postic:'<P style="padding-top:15px; text-align:center;"><span class="resaltar"><b>¡Protege a <br>tus pequeños:</b></span></p><hr /><p style="text-align:center;">con su delicioso sabor cereza en <b>una sola toma!.</b></p>',imagen:'cereza-tachuela-rojo.png',contenido:'<p style="text-align:center;">Cada frasco contiene: <hr>Mebendazol........... 60mg.<br/>Quinfamida.............10mg.</p>',presentacion:'<p style="text-align:center;">Caja con un frasco de: <hr>10 ml.</p>'}
		);
var tulio= TweenMax.to(".pulpo",2,{top:210,left:220,marginleft:260,paused:true,repeat:-1,yoyo:true,repeatDelay:2,ease:Linear.easeNone});
var lombricia= TweenMax.to(".lombris",2,{top:210,paused:true,repeat:-1,yoyo:true,repeatDelay:3,ease:Elastic.easeInOut});

	if (window.top!=window.self) {
		$(".logo").fadeOut(500);
		$(".cuadrox").fadeIn(500);
		$(".home").fadeIn(500);
		TweenMax.to(".home .copy",3,{top:495});
	}else{
			$(".cuadrox").fadeIn(500);
			$(".cajas").fadeIn(500,function(){
			$(".cajaCopy").fadeIn(600);
			$(".cajaPelota").delay(400).fadeIn();
			$(".cajaLupita").delay(400).fadeIn();
			$(".cajaAmiba").delay(800).fadeIn();
			$(".cajaPlatano").delay(1200).fadeIn();
			$(".cajaCereza").delay(1600).fadeIn();
		});
		$(".cuadrox").fadeOut(100);
	}
	function detenerExtra(){
$(".extra").fadeOut(10);
		tulio.pause();
		
	}
	botones ();
	function botones(){
		TweenMax.to(".inff",2,{scale:0.92,yoyo:true,repeat:-1});
	}
	function mostrar(cual){
		$(cual).fadeIn();
	}
	function ocultar(cual){
		$(cual).fadeOut();
	}
	function detallePresentacion(producto){
		$(".detalle").fadeOut(500,function(){
			switch(producto){
				case 1:
				detenerExtra();
					$(".atras").fadeOut(500,function(){
						indicador=1;
						
					});
				break;
				case 2:
				detenerExtra();
					$(".atras").fadeIn(500);
					$(".adelante").fadeIn(500,function(){
					
						$(".lombris").fadeIn(500,function(){
							lombricia.play();
						});
						indicador=1;
					});	
				break;
				case 3:
				detenerExtra();
					$(".atras").fadeIn(500);
					$(".adelante").fadeIn(500,function(){
						
						$(".pulpo").fadeIn(500,function(){
							tulio.play();
						});
						indicador=1;
					});
				break;
				case 4:
				detenerExtra();
					$(".detalle").fadeOut(300,function(){
						indicador=1;
						
					$(".salida").fadeIn();
					});
			break;
			}			
		});
		
		if(producto<4){
			$(".cuadrox").delay(500).fadeIn(500,function(){
				$(".imagenContenido").css("background","url(asset/images/"+detalles[producto].contenidoImg+") no-repeat top center");
				$(".imagenPresentacion").css("background","url(asset/images/"+detalles[producto].presentacionImg+") no-repeat top center");
				$(".copy").css("background","url(asset/images/"+detalles[producto].copy+") no-repeat top center");
				$(".postit").html(detalles[producto].postic);
				$(".imagen").css("background", "url(asset/images/"+detalles[producto].imagen+") no-repeat top center");
				$(".presentacion").html(detalles[producto].presentacion);
				$(".contenido").html(detalles[producto].contenido);
				$(".empaque").css("background","url(asset/images/"+detalles[producto].empaque+") no-repeat top center");
				$(".detalle").fadeIn(500);
				$(".logo").fadeOut(500);				
			});			
		}else{
			$(".cuadrox").fadeOut();
			$(".logo").fadeIn();		
		}
	}

	$(".inff").on("mousemove",function(e){
		cual=$(this).attr("ref");
		mostrar(cual);
	});

	$(".inff").on("mouseleave",function(e) {
		cual=$(this).attr("ref");
		ocultar(cual);
	});

	$(".cajita").on("click",function(e) {
		$(".cajas").fadeOut(300);
			switch($(this).attr("data-detalle")){
				case "1":
				valor=1;
				break;
				case "2":
				valor=2;
				break;
				case "3":
				valor=3;
				break;
			}
		$(".salida").fadeOut();
		detallePresentacion(valor);
	});
	$(".flecha").on("click",function(e) {
		if(indicador==1){
			indicador=0;
			if($(this).attr("indicar")=="atras"){
				valor=(valor-1);
			}else{
				valor=(valor+1);
			}
		detallePresentacion(valor);
		}
	});
});