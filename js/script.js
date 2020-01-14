window.onload = () => {
  let flex = new Flex({
    columns: 6,
    quont: 12,
    text: [
      "Mauris eget vulputate felis. Phasellus sit amet leo sed tellus vulputate",
      "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
      "Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum",
      "Auia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.",
      "Sed erat nibh, imperdiet in ornare et, feugiat nec diam. Morbi imperdiet.",
      "Auia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi."
    ]
  });

  document.querySelector("#app").appendChild(flex.getElem());

  function Flex(options) {
    let elem, wrap, items, item, imgWrap, img, text, after, css, style, col;

    function getElem() {
      if (!elem) render();

      return elem;
    }

    function render() {
      elem = document.createElement("div");
      elem.className = "flexGrid";

      wrap = document.createElement("div");
      wrap.className = "flexGrid__wrapper";
      wrap.style.margin = "10px";
      elem.appendChild(wrap);

      items = document.createElement("div");
      items.className = "flexGrid__items";
      items.style.display = "flex";
      items.style.flexFlow = "row wrap";
      items.style.margin = "0 -10px";
      items.style.color = "white";
      wrap.appendChild(items);

      for (let i = 0; i < options.quont; i++) {
        item = document.createElement("div");
        item.className = "flexGrid__item";

        col = options.columns || 3;

        item.style.flex = "1 1 calc(" + 100 / col + "% - 27px)";
        item.style.minWidth = "260px";
        item.style.margin = "10px";
        item.style.padding = "3px";
        item.style.backgroundColor = "#222";
      }
    }
  }
};
