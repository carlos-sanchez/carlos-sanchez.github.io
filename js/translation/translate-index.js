// si el idioma del navegador es español o si en la URL se incluye el parametro lang=es entonces se traducen los contenidos

if((getURLParam('lang')=='' && (skDeterminarIdiomaNaveg()=='es-ES' || skDeterminarIdiomaNaveg()=='es')) || getURLParam('lang')=='es' ){

	document.getElementById('elevatorPitch').innerHTML=elevatorPitch;
	document.getElementById('brandsWorked').innerHTML=brandsWorked;
	document.getElementById('nextEmployer').innerHTML=nextEmployer;
	document.getElementById('getResume').innerHTML=getResume;
	
	document.getElementById('moreWebs').innerHTML=moreWebs;
	document.getElementById('moreApps').innerHTML=moreApps;
	document.getElementById('moreLogos').innerHTML=moreLogos;
	document.getElementById('morePrints').innerHTML=morePrints;
		
	document.getElementById('whatIKnow').innerHTML=whatIKnow;
	document.getElementById('technologies').innerHTML=technologies;
	document.getElementById('tools').innerHTML=tools;
	document.getElementById('otherStuff').innerHTML=otherStuff;
	document.getElementById('usability').innerHTML=usability;
	document.getElementById('accessibility').innerHTML=accessibility;
	
}


