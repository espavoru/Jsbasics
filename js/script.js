jQuery(() => {
  let flex = new Flex({
    quont: 15,
    text: [
      "Mauris eget vulputate felis. Phasellus sit amet leo sed tellus vulputate",
      "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
      "Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum",
      "Auia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.",
      "Sed erat nibh, imperdiet in ornare et, feugiat nec diam. Morbi imperdiet.",
      "Auia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi."
    ]
  });

  $("#app").append(flex.getElem());

  function Flex(options) {
    let $elem,
      $wrap,
      $gridItems,
      $item,
      $imgWrap,
      $img,
      $text,
      $after,
      css,
      $style,
      target;

    function getElem() {
      !$elem ? render() : null;

      return $elem;
    }

    function render() {
      $elem = $("<div>").addClass("flexGrid");

      $wrap = $("<div>")
        .addClass("flexGrid__wrap")
        .css({
          margin: "10px"
        })
        .appendTo($elem);

      $gridItems = $("<div>")
        .addClass("flexGrid__items")
        .css({
          display: "flex",
          flexFlow: "row wrap",
          margin: "0 -10px"
        })
        .appendTo($wrap);

      for (let i = 0; i < options.quont; i++) {
        $item = $("<div>")
          .addClass("flexGrid__item")
          .css({
            display: "flex",
            flexFlow: "col wrap",
            flex: "1 1 calc(50% - 30px)",
            minWidth: 280,
            margin: 10,
            padding: 3,
            backgroundColor: "#222",
            transition: "all 500ms",
            cursor: "pointer"
          });

        $imgWrap = $("<div>")
          .addClass("flexGrid__imgWrap")
          .css({
            flex: "3 1 100%",
            minWidth: 150
          })
          .appendTo($item);

        $img = $("<img>")
          .attr({
            class: "flexGrid__img",
            src: "https://picsum.photos/800/600?image=2" + i
          })
          .css({
            display: "block"
          })
          .appendTo($imgWrap);

        $text = $("<p>")
          .addClass("flexGrid__text")
          .css({
            flex: "1 1 calc(30% - 10px)",
            margin: "0 5px"
          })
          .text(options.text[i] || options.text[0] || "Lorem Ipsum")
          .appendTo($item);

        $gridItems.append($item);
      }

      $after = $item
        .clone()
        .css({
          height: 0,
          visibility: "hidden"
        })
        .appendTo($gridItems);

      css = "";
      css += "\n.flexGrid__item:hover {\n";
      css += "  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7)}\n";

      $style = $("<style>")
        .text(css)
        .appendTo($("head"));

      $elem.on("click", e => {
        target = e.target.closest(".flexGrid__item");

        target ? $(target).fadeOut(500) : null;
      });
    }

    this.getElem = getElem;
  }
});
