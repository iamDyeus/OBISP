$(document).ready(function() {
    // Handle form submission
    $(".--add-to-list").click(function(event) {
      event.preventDefault(); // Prevent form from submitting and page refresh
  
      // Get user input values
      var taskTitle = $("#title").val();
      var taskDescription = $("#description").val();
  
      if (taskTitle.trim() === "") {
        // Title is empty, show modal with humorous message
        $("#modalMessage").text("Adding a title is necessary. Otherwise, it's like eating pizza without toppings. Please enter a title to proceed!");
        $("#myModal").addClass("dark-mode").modal("show");
      } else {
        // Create Task Card HTML dynamically
        var cardHtml = '<div class="card mb">' +
      '<div class="card-body">' +
      '<div class="row">' +
      '<div class="col-md-4 col-sm-6 --title">' + taskTitle + '</div>' +
      '<div class="col-md-6 col-sm-6 --description">' + taskDescription + '</div>' +
      '<div class="col-md-2 col-sm-6 --remove d-flex justify-content-end align-items-center">' +
      '<button class="btn btn-primary">Remove</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

      
  
        // Append the card to the task container
        $(".tasks").append(cardHtml);
  
        // Reset the form inputs
        $("#title").val('');
        $("#description").val('');
      }
    });
  
    // Handle card removal
    $(".tasks").on("click", ".btn-primary", function() {
      $(this).closest(".card").remove();
    });
  
    // Reset modal message on modal close
    $("#myModal").on("hidden.bs.modal", function() {
      $("#modalMessage").text("");
    });
  });
  