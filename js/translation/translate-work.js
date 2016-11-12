// si el idioma del navegador es español o si en la URL se incluye el parametro lang=es entonces se traducen los contenidos

if((getURLParam('lang')=='' && (skDeterminarIdiomaNaveg()=='es-ES' || skDeterminarIdiomaNaveg()=='es')) || getURLParam('lang')=='es' ){
	
	document.getElementById('webRibbon').innerHTML=webRibbon;
	document.getElementById('appRibbon').innerHTML=appRibbon;
	document.getElementById('logoRibbon').innerHTML=logoRibbon;
	document.getElementById('printRibbon').innerHTML=printRibbon;
	
	//para elementos que se repiten hay que usar clases y bucles for
	for (var i=0; i < document.getElementsByClassName('checkItOut').length; i++ ){
		document.getElementsByClassName('checkItOut')[i].innerHTML=checkItOut;
	}
	
	
	for (var i=0; i < document.getElementsByClassName('iosDownload').length; i++ ){
		document.getElementsByClassName('iosDownload')[i].innerHTML=iosDownload;
	}
	
	
	for (var i=0; i < document.getElementsByClassName('comingSoon').length; i++ ){
		document.getElementsByClassName('comingSoon')[i].innerHTML=comingSoon;
	}
	
	for (var i=0; i < document.getElementsByClassName('clickToEnlarge').length; i++ ){
		document.getElementsByClassName('clickToEnlarge')[i].innerHTML=clickToEnlarge;
	}
	
	for (var i=0; i < document.getElementsByClassName('notPublished').length; i++ ){
		document.getElementsByClassName('notPublished')[i].innerHTML=notPublished;
	}

	
	
}


