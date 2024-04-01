$(document).ready(function(){
    console.log("O documento está pronto!");
    
    $("#form").submit(function(e) {
        e.preventDefault(); 
        $("#numero").mask("(00) 00000-0000"); 
        console.log("Máscara aplicada ao campo #numero");
    });
});