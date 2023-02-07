document.getElementById("botao").addEventListener("click",validaFormulario)

function validaFormulario(){
    if(document.getElementById("Nome").value != "" &&
      document.getElementById("email").value != "" ){
    alert("Prontinho! você receberá as novidades por email.")
      
   }else{
     alert("Por favor, preencha os campos nome e email!")
   }
 }
