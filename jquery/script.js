$(document).ready(function() {
  // Adicionar tarefa
  $("#addTask").click(function() {
      var taskText = $("#newTask").val();
      if (taskText !== "") {
          $("#taskList").append("<li>" + taskText + " <button class='delete'>Excluir</button></li>");
          $("#newTask").val("");
      }
  });

  // Excluir tarefa
  $("#taskList").on("click", ".delete", function() {
      $(this).parent().remove();
  });

  // Animação ao adicionar tarefa
  $("#taskList").on("DOMNodeInserted", "li", function() {
      $(this).hide().fadeIn("slow");
  });

  // Requisição AJAX (simulada)
  $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      type: "GET",
      success: function(data) {
          console.log("Dados recebidos via AJAX:", data);
          // $(".container").append("<p>Título da tarefa recebida: " + data.title + "</p>");
      },
      error: function() {
          console.log("Erro ao receber dados via AJAX.");
      }
  });
});