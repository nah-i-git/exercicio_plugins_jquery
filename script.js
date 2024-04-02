$(document).ready(function(){
    console.log("O documento está pronto!");
    //$("#form").submit(function(e) {
       // e.preventDefault();
    //});

    $("#numero").mask("00 00000 0000"); 
    console.log("Máscara aplicada ao campo #numero");

    $("#cpf").mask("000.000.000-00");
    console.log("Máscara aplicada ao campo #cpf");

    $("#cep").mask("00.000-00");
    console.log("Máscara aplicada ao campo #cep");

    $("form").validate({
            nome:{
                required: true, 
                
            },
            email:{
                required: true,
                email:true
            },
            numero:{
                required: true,
            },
            cpf:{
                required: true,
            },
            endereco:{
                required: true,
            },
            cep:{
                required: true,
            },
            messages: {
                nome: "Insira seu nome, por favor.",
                email: "Insira um email válido.",
                numero:"Insira um número válido.",
                cpf:"Insira seu CPF.",
                endereco: "Insira seu endereço",
                cep:"Insira seu CEP.",
            },
    });
});