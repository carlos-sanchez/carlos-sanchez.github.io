// si el idioma del navegador es español o si en la URL se incluye el parametro lang=es entonces se traducen los contenidos

if((getURLParam('lang')=='' && (skDeterminarIdiomaNaveg()=='es-ES' || skDeterminarIdiomaNaveg()=='es')) || getURLParam('lang')=='es' ){
	
	document.getElementById('getInTouch').innerHTML=getInTouch;
	document.getElementById('phoneNumber').innerHTML=phoneNumber;
	document.getElementById('dropALine').innerHTML=dropALine;
	
	document.getElementById('formName').innerHTML=formName;
	document.getElementById('formMail').innerHTML=formMail;
	document.getElementById('formPhone').innerHTML=formPhone;
	document.getElementById('formQuery').innerHTML=formQuery;
	
	document.getElementById('captchaInstruction').innerHTML=captchaInstruction;
	
}


