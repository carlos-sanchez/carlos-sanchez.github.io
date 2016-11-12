// si el idioma del navegador es español o si en la URL se incluye el parametro lang=es entonces se traducen los contenidos

if((getURLParam('lang')=='' && (skDeterminarIdiomaNaveg()=='es-ES' || skDeterminarIdiomaNaveg()=='es')) || getURLParam('lang')=='es' ){

	
	document.getElementById('birthInfo').innerHTML=birthInfo;
	
	document.getElementById('educationBand').innerHTML=educationBand;
	document.getElementById('languagesBand').innerHTML=languagesBand;
	document.getElementById('basketballBand').innerHTML=basketballBand;
	document.getElementById('artistsBand').innerHTML=artistsBand;
	document.getElementById('beachboysBand').innerHTML=beachboysBand;
	document.getElementById('boardsBand').innerHTML=boardsBand;
	document.getElementById('mycollectionBand').innerHTML=mycollectionBand;
		
	document.getElementById('telecommunicationsDegree').innerHTML=telecommunicationsDegree;	
	document.getElementById('spainGpa').innerHTML=spainGpa;		
	document.getElementById('usGpa').innerHTML=usGpa;		
	document.getElementById('mH').innerHTML=mH;	
	document.getElementById('finalThesisGrade').innerHTML=finalThesisGrade;	
	document.getElementById('promotionPosition').innerHTML=promotionPosition;	
	document.getElementById('promotionTop').innerHTML=promotionTop;	
	document.getElementById('exchangeTwoSemesters').innerHTML=exchangeTwoSemesters;
	document.getElementById('exchangeOneSemester').innerHTML=exchangeOneSemester;
	
	document.getElementById('visitedCountries').innerHTML=visitedCountries;	
	document.getElementById('fluentLanguages').innerHTML=fluentLanguages;	
	document.getElementById('spokenLanguages').innerHTML=spokenLanguages;	
	// document.getElementById('survivalLanguages').innerHTML=survivalLanguages;	
	// document.getElementById('otherLanguages').innerHTML=otherLanguages;	
	document.getElementById('toeflScore').innerHTML=toeflScore;	
	document.getElementById('beforeCollege').innerHTML=beforeCollege;

	document.getElementById('ieltsScore1').innerHTML=ieltsScore1;	
	document.getElementById('ieltsScore2').innerHTML=ieltsScore2;

	document.getElementById('millionPeople').innerHTML=millionPeople;	
	document.getElementById('fluently').innerHTML=fluently;	
	
	document.getElementById('stateChamp').innerHTML=stateChamp;	
	document.getElementById('nationalChamp').innerHTML=nationalChamp;
	
	for (var i=0; i < document.getElementsByClassName('unicajaMalaga').length; i++ ){
		document.getElementsByClassName('unicajaMalaga')[i].innerHTML=unicajaMalaga;
	}
		
	document.getElementById('nbaPlayers').innerHTML=nbaPlayers;	
	document.getElementById('blockedGasol').innerHTML=blockedGasol;
	document.getElementById('fourTeen').innerHTML=fourTeen;	
	document.getElementById('jerseyNumber').innerHTML=jerseyNumber;	
	
	document.getElementById('posterCaption').innerHTML=posterCaption;
	
	document.getElementById('beachBoyInterview').innerHTML=beachBoyInterview;
	document.getElementById('beachBoysMet').innerHTML=beachBoysMet;
	document.getElementById('beachBoysBackstage').innerHTML=beachBoysBackstage;
	
	document.getElementById('rideSurfaces').innerHTML=rideSurfaces;
	document.getElementById('elements').innerHTML=elements;
	
	document.getElementById('bookCollection').innerHTML=bookCollection;
	document.getElementById('recordCollection').innerHTML=recordCollection;
	document.getElementById('recordRatio').innerHTML=recordRatio;
	document.getElementById('dvdRatio').innerHTML=dvdRatio;
	document.getElementById('collectionCaption').innerHTML=collectionCaption;
		

}


