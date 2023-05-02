

function Verificar(){

let nome = document.getElementById('nome').Value;
let data = document.getElementById('data').Value;
let email= document.getElementById('email').Value;
let senha = document.getElementById('senha').Value;
let endereço = document.getElementById('endereço').Value;
let complemento = document.getElementById('complemento').Value;
let  bairro= document.getElementById('bairro').Value;
let cidade = document.getElementById('cidade').Value;
let estado = document.getElementById('estado').Value;
let telefone = document.getElementById('numero').Value;
let cep= document.getElementById('cpf').Value;

if(!nome || !data || !email || !senha || !endereço || !complemento || !bairro || !cidade || !estado || !numero || !cpf ){

alert("Campos de preenchimento obrigatório. Favor preencher");

}else{
    
alert("Campos preenchidos com sucesso");
    
}
}
