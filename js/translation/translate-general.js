// añade el parámetro con el idioma al link de cada sección

if(getURLParam('lang')!=''){
	document.getElementById('logoLink').href='index.html' + '?lang=' + getURLParam('lang');
	document.getElementById('homeLink').href='index.html' + '?lang=' + getURLParam('lang');
	document.getElementById('workLink').href='work.html' + '?lang=' + getURLParam('lang');
	document.getElementById('aboutLink').href='about.html' + '?lang=' + getURLParam('lang');
	document.getElementById('aboutLinkTwo').href='about.html' + '?lang=' + getURLParam('lang');
	document.getElementById('contactLink').href='contact.html' + '?lang=' + getURLParam('lang');
}

// si el idioma del navegador es español o si en la URL se incluye el parametro lang=es entonces se traducen los contenidos

if((getURLParam('lang')=='' && (skDeterminarIdiomaNaveg()=='es-ES' || skDeterminarIdiomaNaveg()=='es')) || getURLParam('lang')=='es' ){

	document.getElementById('titulo').innerHTML=titulo;
	
	document.getElementById('homeLink').innerHTML=homeLink;
	document.getElementById('workLink').innerHTML=workLink;
	document.getElementById('aboutLink').innerHTML=aboutLink;
	document.getElementById('contactLink').innerHTML=contactLink;
		
	document.getElementById('firstQuote').innerHTML=firstQuote;
	document.getElementById('secondQuote').innerHTML=secondQuote;
	document.getElementById('firstPosition').innerHTML=firstPosition;
	document.getElementById('secondPosition').innerHTML=secondPosition;
	document.getElementById('copyright').innerHTML=copyright;

}


