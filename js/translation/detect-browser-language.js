
function skDeterminarIdiomaNaveg() {
   var idiomaNavegador = new String;

   if (navigator.language){
      idiomaNavegador = navigator.language;

      // En este caso, el idioma devuelto puede contener el 
      // subcódigo de idioma (p.ej. "es-ES").
   } else {
      idiomaNavegador = navigator.browserLanguage;

      // En este caso, el idioma devuelto solo conteniene el 
      // código de idioma (p.ej. "es")
   }
   return idiomaNavegador;
}