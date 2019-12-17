let todo = new Todo({
  header: "Header",
  title: "Title",
  item: "Item"
});
$("#app").append(todo.getElem());

function Todo(options) {
  let $elem,
    css,
    $header,
    $title,
    $counter,
    $listItems,
    items,
    $li,
    $addBtn,
    $form,
    $newItemDescr,
    $submit;

  function getElem() {
    !$elem ? render() : null;
    return $elem;
  }

  function render() {
    css = "";

    $elem = $("<div>").addClass("todolist");

    $header = $("<h1>")
      .addClass("todolist__header")
      .text(options.header)
      .appendTo($elem);

    css += "\n.todolist__header { \n";
    css += "  text-align: center; \n";
    css += "} \n";

    $title = $("<h2>")
      .addClass("todolist__title")
      .text(options.title)
      .appendTo($elem);

    css += "\n.todolist__title {\n";
    css += "  text-align: center;\n";
    css += "}\n";

    $counter = $("<span>")
      .addClass("todolist__counter")
      .appendTo($elem);

    $listItems = $("<ul>")
      .addClass("todolist__items")
      .on("click", e => {
        liHandler(e);
      })
      .appendTo($elem);

    items = [];

    $("head").append($("<style>").text(css));
  }

  this.getElem = getElem;
}
