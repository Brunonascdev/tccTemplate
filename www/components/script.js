$(document).on("click", "#registrar", function(){
  if ($("#nome").val() == "" || $("#email").val() == "" || $("#usuario").val() == "" || $("#senha").val() == ""){
    navigator.notification.alert("Preencha os campos para o cadastro!");
  }

  var parametros = {
    "nome":$("#nome").val(),
    "email":$("#email").val(),
    "usuario":$("#usuario").val(),
    "senha":$("#senha").val()
  };

  $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://testebooleam.000webhostapp.com/cadastro.php", // pra onde vai enviar
    data:parametros, // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      navigator.notification.alert(data);
      $("#nome").val("");
      $("#email").val("");
      $("#usuario").val("");
      $("#senha").val("");
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao cadastrar!");
    }
  });
});

