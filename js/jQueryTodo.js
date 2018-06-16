// Check off specific todos by clicking

$("ul").on("click", "li", function () {
  $(this).toggleClass("complete");

});

// click on X to delete todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

// capture vale in input as new todo then removing the text on input
$("input[type='text'] ").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // creat new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});


$("#toggle-form").click(function () {
  $("input[type='text'] ").fadeToggle();
});
